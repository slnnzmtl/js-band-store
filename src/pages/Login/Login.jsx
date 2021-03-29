import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import reducer from './store/loginSlice';
import * as actions from './store/loginActions';
import AuthForm from './components/AuthForm/AuthForm';

const Login = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [name, setName] = useState(currentUser && currentUser.username);

  return (
    <div className="login-page">
      <AuthForm onSubmit={(data) => dispatch(actions.userLogin(data))} type="login" name={name} setName={setName} />
    </div>
  );
};

export { reducer, actions };

export default Login;
