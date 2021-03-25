import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actionTypes";
import "./UserMenu.scss";

const UserMenu = ({currentUser}) => {

  const dispatch = useDispatch();

  const signout = () => {
    dispatch({type: Actions.RESET_CURRENT_USER});
  };

  return (
    <div className="user-menu">
      <div className="user-menu__container">
        <span className="user-menu__username">{currentUser.username}</span>
        <button className="user-menu__button" onClick={signout}>Sign Out</button>
      </div>
    </div>
  )
};

UserMenu.propTypes = {
  currentUser: PropTypes.instanceOf(Object),
};

UserMenu.defaultProps = {
  currentUser: {}
};

export default UserMenu;