import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import Recipe from './Recipe';

const App = () => (
  <div>
    <Header />
    <main style={{ display: 'flex' }}>
      <RecipeList style={{ flex: 2 }} />
      <Recipe style={{ flex: 3 }} />
    </main>
  </div>
);

export default App;
