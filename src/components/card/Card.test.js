import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from './Card';

describe('Card', () => {
  let props;
  beforeEach(() => {
    props = { id: '123', name: 'test name', watchersCount: 55 };
  });

  it('renders Card without crashing', () => {
    const { getByTestId } = render(<Card
      id={props.id}
      name={props.name}
      watchersCount={props.watchersCount}
    />);
    const card = getByTestId('card');
    const id = getByTestId('item-id');
    const name = getByTestId('item-name');
    const count = getByTestId('item-count');

    expect(card).toContainElement(id);
    expect(id).toHaveTextContent(props.id);
    expect(card).toContainElement(name);
    expect(name).toHaveTextContent(props.name);
    expect(card).toContainElement(count);
    expect(count).toHaveTextContent(props.watchersCount);
  });
});
