import React from "react";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <a className="navbar-brand navbar-heading" href="/">
        TECH SALAD
      </a>
      <button
        className="btn btn-primary"
        type="submit"
        id="navbar-btn"
        onClick={props.handleNewBtnClick}
      >
        Add New
      </button>
    </nav>
  );
};

export default Header;
