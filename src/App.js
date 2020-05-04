import React from 'react';

// Import third party's components
import { Route, Switch } from 'react-router-dom';

// Import the components
import Header from './components/header/header.component';
import HomePage from './components/home-page/home-page.component';
import ShopPage from './components/shop-page/shop-page.component';
import AuthPage from './components/auth-page/auth.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Import functions for Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/auth/auth.actions';

class App extends React.Component {
  // Clear log in subscription when app is started
  unsubscribeFromAuth = null;

  // Check if firebase has logged in current user and make log in automaticaly
  componentDidMount() {
    // A simple data destructuring to simplify the app
    const {setCurrentUser} = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            currentUser: snapShot.data().displayName,
            ...snapShot.data() // All the user data
          })
        });
      }

      // If there is no logged in user in firebase, then userAuth will be null
      setCurrentUser(userAuth);
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

/**
 * Complicated function, the should be unchange,
 * we dispatch user object to imported `setCurrentUser` function,
 * then set this received value to `setCurrentUser` from right to left side
 */
const mapDispatchToProps = dispatch => ({
  setCurrentUser: userObj => dispatch(setCurrentUser(userObj))
});

/**
 * The first parameter in connect function allways will be null,
 * then we receive data from reducer
 */
export default connect(null, mapDispatchToProps)(App);
