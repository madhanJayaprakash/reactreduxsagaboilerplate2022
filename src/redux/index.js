import { combineReducers } from 'redux';
import ProductReducers from './reducers/productreducer'

const rootReducer = combineReducers({
  products: ProductReducers,
});

export default rootReducer;