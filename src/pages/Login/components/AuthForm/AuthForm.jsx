import  { useEffect, useState } from "react";
import "./AuthForm.scss";

const AuthForm = ({onSubmit, setName, name}) => {
 
  const [error, setError] = useState();

  const checkName = value => {    
    if (!value) return setError("Username is not valid");
    setName(value);

    if (value.length < 4) return setError("Username is not valid");
    if (value.length > 16) return setError("Username is not valid");

    setError();
    return true;
  };

  console.log(name)
  
  const formSubmit = (evt) => {
    evt.preventDefault();
    if (checkName(name)) return onSubmit(name);
    return false;
  };

  return (
    <form className="auth-form" onSubmit={formSubmit}>
      { error &&
      <div className="auth-form__error">{error}</div>}
      <label className="auth-form__label" htmlFor="name">Name</label>
      <input type="text" onChange={e => checkName(e.target.value)} className="auth-form__input" name="name" />
      <input type="submit" className="auth-form__submit" name="submit" value="Log In" />
    </form>
  );
};

export default AuthForm;