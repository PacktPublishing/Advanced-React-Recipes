import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../../components/RecipeList';

const testRecipes = [
  {
    id: 1,
    name: 'Test recipe 1',
    category: 'Dessert',
  },
  {
    id: 2,
    name: 'Test recipe 2',
    category: 'Meat',
  },
];

describe('<RecipeList />', () => {
  let component;
  let tree;

  test('Should not break if no recipes passed', () => {
    expect(() => renderer.create(<RecipeList />)).not.toThrow();
  });

  test('Should render passed recipes', () => {
    component = renderer.create(<RecipeList recipes={testRecipes} />);
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render favorited states', () => {
    component = renderer.create(
      <RecipeList recipes={testRecipes} favorites={[1]} />,
    );
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
