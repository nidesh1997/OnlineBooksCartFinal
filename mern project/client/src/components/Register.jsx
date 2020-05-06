import React, { Component } from "react";
import { register } from "./UserFunctions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      contact: "",
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      contact: this.state.contact_no,
      email: this.state.email,
      password: this.state.password,
    };

    if (this.state.email === "") {
      alert("email is required");
    } else if (this.state.password === "") {
      alert("password is required");
    } else if (this.state.contact === "") {
      alert("contact no is required");
    } else {
      register(newUser).then((res) => {
        this.props.history.push(`/login`);
      });
    }
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
                border: "solid black",
                "border-radius": "5px",
              }}
              noValidate
              onSubmit={this.onSubmit}
            >
              <h1
                className="h3 mb-3 font-weight-normal"
                style={{ textAlign: "center" }}
              >
                Register
              </h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">contact</label>
                <input
                  type="number"
                  className="form-control"
                  name="contact"
                  placeholder="Enter contact"
                  value={this.state.contact}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
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
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
