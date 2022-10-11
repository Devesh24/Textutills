import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
              {/* <Link className="nav-link" to="/about">
                About
              </Link> */}
            </li>
          </ul>

          <button className="d-flex rounded-circle p-2 m-2" style={{backgroundColor: "#360c09"}} onClick={()=>props.toggleMode("#360c09")} ></button>
          <button className="d-flex rounded-circle p-2 m-2" style={{backgroundColor: "#002407"}} onClick={()=>props.toggleMode("#002407")} ></button>
          <button className="d-flex rounded-circle p-2 m-2" style={{backgroundColor: "#071326"}} onClick={()=>props.toggleMode("#071326")} ></button>
          <button className="d-flex rounded-circle p-2 m-2" style={{backgroundColor: "#47043a"}} onClick={()=>props.toggleMode("#47043a")} ></button>
          <button className="d-flex rounded-circle p-2 m-2" style={{backgroundColor: "#ffffff"}} onClick={()=>props.toggleMode("#ffffff")} ></button>
          <label className={`form-check-label mx-2 text-${props.mode==='light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
            Themes
          </label>
        </div>

        {/* <div className="form-check form-switch mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode} 
          />
          <label className={`form-check-label text-${props.mode==='light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
            Dark Mode
          </label>
        </div> */}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
