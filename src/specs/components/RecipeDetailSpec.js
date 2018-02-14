import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import RecipeDetail from '../../components/RecipeDetail';

describe('<RecipeDetail />', () => {
  let component;
  let tree;
  let testRecipeDetail;

  beforeEach(() => {
    testRecipeDetail = {
      id: 1,
      name: 'Test recipe',
      category: 'Dessert',
      calories: 100,
      image: 'test url',
      ingredients: ['Ingrendient 1', 'Ingrendient 2'],
      steps: ['Steps 1', 'Steps 2'],
    };
  });

  const recipe = (props = {}) => (
    <BrowserRouter>
      <RecipeDetail {...props} />
    </BrowserRouter>
  );

  test('Should render zero state if no recipe passed', () => {
    component = renderer.create(recipe());
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render passed recipe', () => {
    component = renderer.create(recipe({ recipe: testRecipeDetail }));
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should not render ingredients if none', () => {
    delete testRecipeDetail.ingredients;
    component = renderer.create(recipe({ recipe: testRecipeDetail }));
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should not render steps if none', () => {
    delete testRecipeDetail.steps;
    component = renderer.create(recipe({ recipe: testRecipeDetail }));
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
