import React from 'react';

const RecipeList = ({ className, style }) => (
  <div className={className} style={style}>
    <h2>Recipes</h2>
    <ul>
      <li>
        <span>Creepy Halloween Skull Cupcakes</span>
        <span>Dessert</span>
      </li>
      <li>
        <span>Blueberry Sour Cream Coffee Cake</span>
        <span>Dessert</span>
      </li>
      <li>
        <span>Amazing Pork Tenderloin in the Slow Cooker</span>
        <span>Meat</span>
      </li>
    </ul>
  </div>
);

export default RecipeList;
