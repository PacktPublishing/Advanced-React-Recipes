import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import NotFound from './NotFound';
import Header from './Header';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />

      <Switch>
        <Redirect from="/home" to="/" />
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
