import { combineReducers } from "redux";
import navBarReducer from './navbar/navBarReducer';
import productReducer from './product/productReducer';
import titleReducer from './title/titleReducer';

const rootReducer = combineReducers({
  title: titleReducer,
  navbar: navBarReducer,
  products: productReducer
})

export default rootReducer;