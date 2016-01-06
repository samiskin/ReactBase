import { compose, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { fluxEnhancer } from 'redux-flux-store';
import TextStore from 'stores/TextStore';
import { createElement } from 'react';

let logger = createLogger({
  level: 'info',
  duration: true
});

let store = compose(
  fluxEnhancer({
    text: TextStore
  }),
  applyMiddleware(thunk, logger)
)(createStore)();

window.__store__ = store;
export default store;

export { connect } from 'react-redux';
