import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

test('renders correctly', () => {
  const handleClick = () => <></>;

  const tree = renderer
    .create(<Button value="+" className="button-class" onClick={handleClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
