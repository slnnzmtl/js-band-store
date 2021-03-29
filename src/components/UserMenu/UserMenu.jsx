import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actions } from '../../pages/Login/Login';
import './UserMenu.scss';

const UserMenu = ({ currentUser }) => {
  const dispatch = useDispatch();

  const signout = () => {
    dispatch({ type: actions.USER_LOGOUT });
  };

  return (
    <div className="user-menu">
      <div className="user-menu__container">
        <span className="user-menu__username">{currentUser.username}</span>
        <button type="button" className="user-menu__button button" onClick={signout}>Sign Out</button>
      </div>
    </div>
  );
};

UserMenu.propTypes = {
  currentUser: PropTypes.instanceOf(Object),
};

UserMenu.defaultProps = {
  currentUser: {},
};

export default UserMenu;
