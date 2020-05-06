import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Books from './components/books';

class App extends Component {
  state = {
    isLoggedin: false,
  };
  setLogin = (status) => {
    this.setState({ isLoggedin: status });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar isLoggedin={this.state.isLoggedin} />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route
              path="/login"
              render={(props) => (
                <Login
                  isLoggedin={this.state.isLoggedin}
                  setLogin={this.setLogin}
                  {...props}
                />
              )}
            />
            <Route
              path="/logout"
              render={(props) => (
                <Logout
                  isLoggedin={this.state.isLoggedin}
                  setLogin={this.setLogin}
                  {...props}
                />
              )}
            />
             <Route exact path="/books" component={Books} />

            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
