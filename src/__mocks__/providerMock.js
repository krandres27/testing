import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import reducer from '../reducers';
import initialState from '../initialState';

const history = createBrowserHistory();

const ProviderMock = props => {
  const { customState } = props;
  const store = createStore(reducer, {...initialState, ...customState});
  return (
    <Provider store={store}>
      <Router history={history}>{props.children}</Router>
    </Provider>
  );
}

export default ProviderMock;
