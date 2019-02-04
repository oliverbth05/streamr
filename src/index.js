import React                          from 'react';
import ReactDOM                       from 'react-dom';
import App                            from './App';
import registerServiceWorker          from './registerServiceWorker';

import './scss/index.scss';
import reducer                        from './store/reducers';
import thunk                          from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider}                     from 'react-redux';
import logger                         from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Provider store = {store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();