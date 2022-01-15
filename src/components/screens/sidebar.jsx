import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

class Sidebar extends React.Component {
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
    render() {
      return (
              <div
                className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
                id="sidebar"
                role="navigation"
                style={{backgroundColor:"#292C6D", opacity:"0.9"}}
              >
                <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                  <li className="nav-item">
                    <a className="nav-link text-light" href="/dashboarddoc">
                      Homepage
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="/upcoming-sessions">
                      Upcoming Sessions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="/previous-sessions">
                      Previous Sessions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="/patients">
                      Patients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="/pending-session">
                      Pending Sessions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="/user-profile">
                      Profile
                    </a> 
                  </li>
                </ul>
              </div>
      );
    }
  }
  
  export default Sidebar;
  