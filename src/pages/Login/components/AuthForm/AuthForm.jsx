import React, { useState } from 'react';
import './AuthForm.scss';
import PropTypes from 'prop-types';

const AuthForm = ({ onSubmit, setName, name }) => {
  const [error, setError] = useState();

  const checkName = (value) => {
    if (!value) return setError('Username is not valid');
    setName(value);

    if (value.length < 4) return setError('Username is not valid');
    if (value.length > 16) return setError('Username is not valid');

    setError();
    return true;
  };

  const formSubmit = (evt) => {
    evt.preventDefault();
    if (checkName(name)) return onSubmit(name);
    return false;
  };

  return (
    <form className="auth-form" onSubmit={formSubmit}>
      { error
      && <div className="auth-form__error">{error}</div>}
      <label className="auth-form__label" htmlFor="username">Name</label>
      <input type="text" onChange={(e) => checkName(e.target.value)} className="auth-form__input" name="username" id="username" />
      <input type="submit" className="auth-form__submit" name="submit" value="Log In" />
    </form>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func,
  setName: PropTypes.func,
  name: PropTypes.string,
};

AuthForm.defaultProps = {
  name: undefined,
  onSubmit: () => {},
  setName: () => {},
};

export default AuthForm;
