import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        u: JSON.parse(localStorage.getItem("user")),
        nudsns: 0,
        npdsns: 0,
        latest: null,
        last: null,
        setjoin:false
      };
    }
    handleSignOut() {
      localStorage.removeItem("user");
    }
    render() {
      return (
        <div>
          <nav className="navbar" style={{backgroundColor:"#292C6D"}}>
            <div className="container-fluid">
              <a className="navbar-brand" href="/" style={{color:"#FAEDF0"}}>
                s4s
              </a>
              <form className="d-flex">
                <Link
                  className="button btn btn-outline-primary me-2"
                  onClick={this.handleSignOut}
                  to="/"
                  style={{color:"#FAEDF0",borderColor:"#FAEDF0"}}
                >
                  Logout
                </Link>
              </form>
            </div>
          </nav>
        </div>
      );
    }
  }
  
  export default Navbar;