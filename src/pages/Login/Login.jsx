import AuthForm from "./components/AuthForm/AuthForm";
import "./Login.scss";
import reducer from "./reducer";
import { useDispatch, useSelector } from 'react-redux';
import { 
  SET_CURRENT_USER
} from "../../store/actionTypes";
import API from "../../utils/api/AuthAPI";
import { useState } from "react";


const Login = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.currentUser);
  const [name, setName] = useState(currentUser.username);

  console.log('login index');

  const formSubmit = value => {
    API.login(value)
    .then(response => dispatch({
      type: SET_CURRENT_USER, 
      data: response
    }));
  };

  return (
    <div className="login-page">
      <AuthForm onSubmit={formSubmit} type="login" name={name} setName={setName} />
    </div>
  );
};

export { reducer };

export default Login;