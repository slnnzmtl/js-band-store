// import logo from './logo.svg';
import './styles/App.scss';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from "./pages/Login/Login";
import { useDispatch, useSelector } from 'react-redux';
import CatalogPage from "./pages/Catalog/Catalog";
import { GET_CURRENT_USER_FROM_LOCAL } from "./store/actionTypes";
import { Fragment, useEffect } from 'react';
import UserMenu from "./components/UserMenu/UserMenu";
import Header from "./components/Header/Header";

const App = () => {
  const currentUser = useSelector(state => state && state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || !currentUser.username) {
      dispatch({type: GET_CURRENT_USER_FROM_LOCAL});
    }
  }, []);

  return (
    <div className="App">
      {currentUser.username && 
        <Fragment>
          <UserMenu currentUser={currentUser} />
          <Header />
        </Fragment>
      }
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/catalog" />
          </Route>
          <Route path="/login">
            {!currentUser.username ? <LoginPage /> : <Redirect to="/catalog" />}
          </Route>
          <Route exact path="/catalog">
            {currentUser.username ? <CatalogPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/cart" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
