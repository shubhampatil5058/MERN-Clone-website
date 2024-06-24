// store.js
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from './reducers/cartReducer';
import { getProductDetailsReducer, getProductReducer } from './reducers/productReducer';

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({}) || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
