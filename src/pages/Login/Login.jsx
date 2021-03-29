import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import reducer from './store/loginSlice';
import * as actions from './store/loginActions';
import AuthForm from './components/AuthForm/AuthForm';
import userpic from '../../assets/icons/userpic.png';

const Login = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [name, setName] = useState(currentUser && currentUser.username);

  return (
    <div className="login-page">
      <img src={userpic} alt="" className="login-page__img" />
      <AuthForm onSubmit={(data) => dispatch(actions.userLogin(data))} type="login" name={name} setName={setName} />
    </div>
  );
};

export { reducer, actions };

export default Login;
