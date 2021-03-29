import { combineReducers } from 'redux';
import { reducer as auth } from '../pages/Login/Login';
import { reducer as catalog } from '../pages/Catalog/Catalog';
import { reducer as cart } from '../pages/Cart/Cart';
import { reducer as details } from '../pages/ProductDetails/ProductDetails';

export default combineReducers({
  auth,
  catalog,
  cart,
  details,
});
