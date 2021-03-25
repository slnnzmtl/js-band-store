import { combineReducers } from 'redux'
import { reducer as auth } from "../pages/Login/Login";
import { reducer as catalog } from "../pages/Catalog/Catalog";


// export default auth;
export default combineReducers({
  auth,
  catalog
});