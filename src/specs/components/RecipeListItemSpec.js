import React from 'react';
import renderer from 'react-test-renderer';
import RecipeListItem from '../../components/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'Test recipe',
  category: 'Dessert',
};

describe('<RecipeListItem />', () => {
  let component;
  let tree;

  test('Should not break if no recipe passed', () => {
    expect(() => renderer.create(<RecipeListItem />)).not.toThrow();
  });

  test('Should render passed recipe', () => {
    component = renderer.create(<RecipeListItem recipe={testRecipe} />);
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorited state', () => {
    component = renderer.create(
      <RecipeListItem recipe={testRecipe} favorited />,
    );
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
