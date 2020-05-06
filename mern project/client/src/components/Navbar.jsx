import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.this.props.history.push(`/login`);
  }

  render() {
    // const loginRegLink = (
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <Link to="/login" className="nav-link">
    //         Login
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link to="/register" className="nav-link">
    //         Register
    //       </Link>
    //     </li>
    //   </ul>
    // );

    // const userLink = (
    //   <ul className="navbar-nav">
    //     <li className="nav-item">
    //       <Link to="/profile" className="nav-link">
    //         User
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <a href="" onClick={this.logOut.bind(this)} className="nav-link">
    //         Logout
    //       </a>
    //     </li>
    //   </ul>
    // );

    return (
      //       <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
      //         <button
      //           className="navbar-toggler"
      //           type="button"
      //           data-toggle="collapse"
      //           data-target="#navbarsExample10"
      //           aria-controls="navbarsExample10"
      //           aria-expanded="false"
      //           aria-label="Toggle navigation"
      //         >
      //           <span className="navbar-toggler-icon" />
      //         </button>

      //         <div
      //           className="collapse navbar-collapse justify-content-md-center"
      //           id="navbarsExample10"
      //         >
      //           <ul className="navbar-nav">
      //             <li className="nav-item">
      //               <Link to="/" className="nav-link">
      //                 Home
      //               </Link>
      //             </li>
      //           </ul>
      //           {localStorage.usertoken ? userLink : loginRegLink}
      //         </div>
      //       </nav>
      <div>
        {/* //3.copy the navbar code from bootstrap */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-info">
          <Link class="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              {this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
              )}
              {this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/login">
                    Categories
                  </Link>
                </li>
              )}
              {this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/books">
                    Books
                  </Link>
                </li>
              )}
              {this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/profile">
                    profile
                  </Link>
                </li>
              )}
              {/* <li class="nav-item active">
              <Link class="nav-link" to="/postform">
                Post Form
              </Link>
            </li> */}
              {this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/posted">
                    User
                  </Link>
                </li>
              )}
            </ul>

            <ul class="navbar-nav mr-5">
              {/* <li class="nav-item">
              <span className="badge badge-primary">{this.props.nidd}</span>
            </li> */}
              {!this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}

              {this.props.isLoggedin && (
                <li class="nav-item active mr-3">
                  {/* <Link class="nav-link" to="/login">
                    Login
                  </Link> */}
                  <input
                    class="form-control mr-sm-2 "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                </li>
              )}

              {this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    <i class="fas fa-heart"></i>
                  </Link>
                </li>
              )}

              {this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    <i class="fas fa-cart-plus"></i>
                  </Link>
                </li>
              )}
              {this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              )}
              <li class="nav-item active">
                <Link class="nav-link" to="/register">
                  Register
                </Link>
              </li>
              {this.props.isLoggedin && (
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    <i class="fas fa-user-circle"></i>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Landing);
