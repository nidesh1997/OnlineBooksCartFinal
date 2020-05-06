import React, { Component } from "react";
import { login } from "./UserFunctions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    login(user).then((res) => {
      console.log("waste fellow", res);
      if (res.error) {
        alert("Invalid User !!! Enter valid credentials");
      } else {
        this.props.history.push(`/profile`);
        this.props.setLogin(true);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form
              className="mt-5 px-5 "
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "solid black 2px",
                "border-radius": "7px",
              }}
              noValidate
              onSubmit={this.onSubmit}
            >
              <h1
                className="h3 mb-3 font-weight-normal"
                style={{ textAlign: "center" }}
              >
                Login Form
              </h1>
              <div className="form-group">
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block mb-3"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
