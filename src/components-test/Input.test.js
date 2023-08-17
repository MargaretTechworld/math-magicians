import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../components/Input';

test('renders correctly', () => {
  const tree = renderer
    .create(<Input value="1" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
