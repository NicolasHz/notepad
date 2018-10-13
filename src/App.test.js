import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const initialState = {
  notesState: {
    notes: [{
      message: "Remember buy carrots?",
      id: 1,
      errors: []
    }]
  },
  UIState: { show: false }
}
const mockStore = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={mockStore(initialState)}>
      <Router>
        <App />
      </Router>
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
