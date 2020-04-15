import React from 'react';

// Import third party's components
import { Route, Switch } from 'react-router-dom';

// Import the components
import Header from './components/header/header.component';
import HomePage from './components/home-page/home-page.component';
import ShopPage from './components/shop-page/shop-page.component';
import AuthPage from './components/auth-page/auth.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // Clear log in subscription when app is started
  unsubscribeFromAuth = null;

  // Check if firebase has logged in current user and make log in automaticaly
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              currentUser: snapShot.data().displayName,
              ...snapShot.data() // All the user data
            }
          })
        });
      }

      // If there is no logged in user in firebase, then userAuth will be null
      this.setState({ currentUser: userAuth });
    });
  }

  // Close authorization in the application when user leave it
  // In Firebase authorization still exists
  componentWillUnmount() {
    this.unsubscribeFromAuth = null;
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
