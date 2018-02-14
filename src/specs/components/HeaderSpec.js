import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('<Header />', () => {
  let component;
  let tree;

  test('Should render Header', () => {
    component = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
