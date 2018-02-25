import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import Home from './Home';
import Favorites from './Favorites';
import Recipe from './Recipe';
import NotFound from './NotFound';
import Header from './Header';
import RootModal from './RootModal';
import { loadRecipes } from '../actions/recipes';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <RootModal />

      <Switch>
        <Redirect from="/home" to="/" />
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/recipe/:id" component={Recipe} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

const mapDispatchToProps = { loadRecipes };

function componentDidMount() {
  this.props.loadRecipes();
}

export default compose(
  connect(null, mapDispatchToProps),
  lifecycle({ componentDidMount }),
)(App);
