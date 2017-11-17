import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
    </main>
  </BrowserRouter>
);

export default App;
