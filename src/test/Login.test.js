import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../pages/Login';


test('Debería renderizar el Login', () => {
    const component = renderer.create(<Login/>);
    let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
