import React from "react";
import logo from "../../Assests/qau.png";
export default function Navbar(props) {
  const profile = props.profile;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  ">
      <div className="container-fluid pt-1">
        <img
          src={logo}
          alt="university-logo"
          className="img-fluid navbar-brand pb-3"
          style={{ width: "50px" }}
        />
        <a href="/" className="navbar-brand h3 ">
          <h5>{props.title}</h5>
        </a>
        <ul className="navbar-nav ms-auto me-4">
          <li className="nav-item dropdown">
            <button
              className=" dropdown-toggle rounded border-0 bg-light"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              <img
                src={profile}
                alt="profle-avtar"
                className="rounded-circle"
                style={{ width: "40px" }}
              />
              <span className="ps-2 ">{props.userName}</span>
            </button>
            <ul
              className="dropdown-menu border-top-0 bg-light"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <a className="dropdown-item" href="/">
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
