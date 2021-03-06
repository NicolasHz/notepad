import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import notesReducer from './store/reducers/notes.reducer'
import notepadReducer from './store/reducers/note-pad.reducer'

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
        : null || compose;

const rootReducer = combineReducers({
    notesState: notesReducer,
    UIState: notepadReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers()
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
