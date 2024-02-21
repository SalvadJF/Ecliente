import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
            <Cart />
          </Route>
          <Route path="/other-page">
            <OtherPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
