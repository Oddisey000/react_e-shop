import React from 'react';

// Import third party's components
import { Route, Switch } from 'react-router-dom';

// Import the components
import Header from './components/header/header.component';
import HomePage from './components/home-page/home-page.component';
import ShopPage from './components/shop-page/shop-page.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
