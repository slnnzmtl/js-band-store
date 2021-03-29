// import logo from './logo.svg';
import './styles/App.scss';
import {
  HashRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, {
  lazy, Suspense, useEffect,
} from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getCartFromLocalStorage } from './pages/Cart/store/cartActions';
import { getProducts } from './pages/Catalog/store/catalogActions';
import Loader from './components/Loader/Loader';

const Header = lazy(() => import('./components/Header/Header'));
const UserMenu = lazy(() => import('./components/UserMenu/UserMenu'));
const LoginPage = lazy(() => import('./pages/Login/Login'));
const CartPage = lazy(() => import('./pages/Cart/Cart'));
const CatalogPage = lazy(() => import('./pages/Catalog/Catalog'));
const DetailsPage = lazy(() => import('./pages/ProductDetails/ProductDetails'));

const App = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser.username) dispatch(getProducts());
  }, [currentUser, dispatch]);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          {currentUser.username
          && (
          <>
            <UserMenu currentUser={currentUser} />
            <Header />
          </>
          )}
          <div className="App__main">
            <Switch>
              <Route exact path="/">
                <Redirect to="/catalog" />
              </Route>
              <PrivateRoute path="/login" auth={!currentUser.username} redirectTo="/">
                <LoginPage />
              </PrivateRoute>
              <PrivateRoute path="/catalog/:id" auth={!!currentUser.username} redirectTo="/login">
                <DetailsPage />
              </PrivateRoute>
              <PrivateRoute path="/catalog" auth={!!currentUser.username} redirectTo="/login">
                <CatalogPage />
              </PrivateRoute>
              <Route path="/cart">
                <CartPage />
              </Route>
            </Switch>
          </div>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
