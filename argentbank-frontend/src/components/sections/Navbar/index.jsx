// import Logo from "../../assets/img/argentBankLogo.webp";
// import Logo from "./images/argentBankLogo.webp";
import Logo from "../../../assets/img/argentBankLogo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout, getUserProfile } from "../../../actions/user.action";
import { useEffect } from "react";

import "./style.css";

export default function Navbar() {
  const userProfile = useSelector((state) => state.userReducer.userProfile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = sessionStorage.getItem("session_token");

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  if (token) {
    return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <nav>
            <NavLink to="/Profile" className="main-nav-item">
              <i className="fa-solid fa-circle-user"></i>
              {userProfile ? userProfile.userName : "Loading..."}
            </NavLink>
            <NavLink to="/" onClick={handleLogout} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </nav>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/Login" className="main-nav-item">
            <i className="fa fa-circle-user"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  }
}
