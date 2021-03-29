import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  auth, children, redirectTo, ...rest
}) => (
  <Route {...rest}>
    {
      auth
        ? <>{children}</>
        : <Redirect to={redirectTo} />
    }
  </Route>
);

PrivateRoute.propTypes = {
  auth: PropTypes.bool,
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};

PrivateRoute.defaultProps = {
  auth: false,
  children: null,
  redirectTo: '',
};

export default PrivateRoute;
