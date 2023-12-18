import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('Box component renders without crashing', () => {
  render(
    <Box
      id="1"
      width="100"
      height="100"
      backgroundColor="red"
      removeBox={() => {}}
    />
  );
});

test('Box component matches snapshot', () => {
  const { asFragment } = render(
    <Box
      id="1"
      width="100"
      height="100"
      backgroundColor="red"
      removeBox={() => {}}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
