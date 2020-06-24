import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';
import '@testing-library/jest-dom/extend-expect';

it('renders Search component', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  const { getByTestId } = render(<Search />);
  const search = getByTestId('search');

  expect(search.to);
});
