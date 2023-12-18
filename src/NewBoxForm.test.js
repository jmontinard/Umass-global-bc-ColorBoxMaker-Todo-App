import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';  
import NewBoxForm from './NewBoxForm';

// test('NewBoxForm component renders without crashing', () => {
//   render(<NewBoxForm createBox={() => {}} />);
// });

// test('NewBoxForm component matches snapshot', () => {
//   const { asFragment } = render(<NewBoxForm createBox={() => {}} />);
//   expect(asFragment()).toMatchSnapshot();
// });

// test('NewBoxForm allows the user to enter data and submit a new box', () => {
//   const createBox = jest.fn();
//   const { getByLabelText, getByRole } = render(
//     <NewBoxForm createBox={createBox} />
//   );

//   // Simulate user typing into the form inputs
//   userEvent.type(getByLabelText(/width:/i), '100');
//   userEvent.type(getByLabelText(/height:/i), '150');
//   userEvent.type(getByLabelText(/background color:/i), 'blue');

//   // Simulate form submission
//   fireEvent.submit(getByRole('button'));

//   // Check if the createBox function was called once
//   expect(createBox).toHaveBeenCalledTimes(1);

//   // Check if the createBox function was called with the correct box data
//   expect(createBox).toHaveBeenCalledWith(
//     expect.objectContaining({
//       width: '100',
//       height: '150',
//       backgroundColor: 'blue',
//     })
//   );
// });

test('renders NewBoxForm component', () => {
  const { container } = render(<NewBoxForm />);
  expect(container).toBeInTheDocument();
});

test('matches snapshot for NewBoxForm component', () => {
  const { container } = render(<NewBoxForm />);
  expect(container).toMatchSnapshot();
});

test('updates form data on input change', () => {
  const { getByLabelText } = render(<NewBoxForm />);

  act(() => {
    fireEvent.change(getByLabelText('Color'), { target: { value: 'red' } });
    fireEvent.change(getByLabelText('Width'), { target: { value: '20' } });
    fireEvent.change(getByLabelText('Height'), { target: { value: '30' } });
  });

  expect(getByLabelText('Color').value).toBe('red');
  expect(getByLabelText('Width').value).toBe('20');
  expect(getByLabelText('Height').value).toBe('30');
});

