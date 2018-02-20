/* eslint-disable react/no-unused-state */
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Recipe from './Recipe';
import NotFound from './NotFound';
import Header from '../components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { recipes: [] };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => {
        this.setState({ recipes });
      });
  }

  toggleFavorite = id => {
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);

      if (idx !== -1) {
        return { ...state, favorites: favorites.filter(f => f !== id) };
      }
      return { ...state, favorites: [...favorites, id] };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />

          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  recipes={this.state.recipes}
                  toggleFavorite={this.toggleFavorite}
                />
              )}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  recipes={this.state.recipes}
                  toggleFavorite={this.toggleFavorite}
                />
              )}
            />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
