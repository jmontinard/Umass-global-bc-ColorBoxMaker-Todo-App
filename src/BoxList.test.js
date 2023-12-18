import React from 'react';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

test('BoxList component renders without crashing', () => {
  render(<BoxList />);
});

test('BoxList component matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});