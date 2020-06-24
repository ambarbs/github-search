import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../search/Search';

it('renders Search without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
});
