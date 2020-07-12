import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card';
import STORE from './store';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const listExpect = renderer
    .create(<List key="1" header="First list"
    cards={[ STORE.allCards.a,
        STORE.allCards.b,
        STORE.allCards.e,
        STORE.allCards.f,
        STORE.allCards.g,
        STORE.allCards.j,
        STORE.allCards.l,
        STORE.allCards.m]}/>)
    .toJSON();
  expect(listExpect).toMatchSnapshot(); 
});