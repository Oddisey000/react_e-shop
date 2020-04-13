import React from 'react';

// Import third party's components
import { Route, Switch } from 'react-router-dom';

// Import the components
import Header from './components/header/header.component';
import HomePage from './components/home-page/home-page.component';
import ShopPage from './components/shop-page/shop-page.component';
import AuthPage from './components/auth-page/auth.component';
import { auth } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
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
