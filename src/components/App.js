import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Recipe from './Recipe';
import NotFound from './NotFound';
import Header from '../components/Header';
import { loadRecipes } from '../actions/recipes';

class App extends React.Component {
  componentDidMount() {
    this.props.loadRecipes();
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />

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
  }
}

App.propTypes = {
  loadRecipes: PropTypes.func,
};

const mapDispatchToProps = { loadRecipes };

export default connect(null, mapDispatchToProps)(App);
