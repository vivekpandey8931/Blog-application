import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
const Header = () => {
  const [loggedIn, setLogin] = useState(false);
  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="footer">
      <div className="ui  inverted menu">
        <div className="ui item">
          <Link to="/" className="item">
            <i className="home icon"></i>Home
          </Link>
          <Link to="/aboutus" className="item">
            About-us
          </Link>
          <a className="item">Contact Us</a>
          <Link to="/feedback" className="item">
            Feedback
          </Link>
        </div>
        <div className="right menu">
          {userInfo ? (
            <div className="ui simple dropdown item">
              <i className="user circle icon"></i>
              {userInfo.name} <i className="fa fa-caret-down"></i>
              <div className="menu">
                <div className="item" onClick={logOutHandler}>
                  <i className="sign-out icon"></i>sign out
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" className="item">
              <i className="sign-out icon"></i>Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
