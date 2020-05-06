import React, { Component } from "react";

import { Link } from "react-router-dom";
const Logout = (props) => {
  return (
    <div className="text-center mt-3">
      <h2>You are logged out successfully</h2>
      <p className="small">
        click
        <Link onClick={() => props.setLogin(false)} to="/login">
          here
        </Link>
        to login again
      </p>
    </div>
  );
};

export default Logout;
