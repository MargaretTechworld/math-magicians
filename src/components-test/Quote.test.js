import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
