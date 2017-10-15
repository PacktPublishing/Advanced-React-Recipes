import React from 'react';

const Recipe = ({ className, style }) => (
  <div className={className} style={style}>
    <h2>Creepy Halloween Skull Cupcakes</h2>
    <img src="http://images.media-allrecipes.com/userphotos/560x315/4557475.jpg" />
    <div>
      <span>Dessert</span>
      <span>1200 cal</span>
    </div>
    <h3>Ingredients</h3>
    <ul>
      <li>1 package devil's food cake mix</li>
      <li>1 cup water</li>
      <li>3 eggs</li>
      <li>1/3 cup vegetable oil</li>
      <li>1 1/2 packages prepared vanilla frosting </li>
      <li>1 pouch prepared chocolate frosting</li>
    </ul>
    <h3>Steps</h3>
    <ol>
      <li>Preheat oven to 350 degrees F (175 degrees C). Line two 12-cup muffin tins with paper liners, preferable dark-colored or Halloween-themed ones.</li>
      <li>Combine cake mix, water, eggs, and oil in a large bowl; beat with an electric mixer on low speed until moistened, about 30 seconds. Beat at medium speed until batter is smooth and creamy, about 2 minutes. Spoon batter into the prepared muffin cups, filling each 3/4 full.</li>
      <li>Bake in the preheated oven until a toothpick inserted in the center comes out clean, 18 to 21 minutes. Remove from oven and cool tins on a wire rack for 15 minutes. Remove cupcakes from the tins and cool completely on a wire rack before decorating, about 1 hour.</li>
      <li>Frost each cupcake with a thin layer of white vanilla frosting and refrigerate for 30 minutes to make decorating easier.</li>
      <li>Remove cupcakes from fridge and apply a second layer of white frosting. Fill a piping bag outfitted with a small round tip with chocolate frosting and draw a skull face on the cupcakes: pipe large ovals for the eyes, two dots for the nostrils, and a large "stitched" smile for the mouth.</li>
    </ol>
  </div>
);

export default Recipe;
