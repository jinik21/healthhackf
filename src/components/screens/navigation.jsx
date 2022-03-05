import { useHistory } from "react-router-dom";

export const Navigation = (props) => {
  const history = useHistory();
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        width: "100%",
      }}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Shrink4Shrink
          </a>{" "}
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav navbar-right">
            <li class="nav-item active">
              <a
                className="fs-2 fw-bold page-scroll text-dark"
                href="#features"
              >
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#about" className="fs-2 fw-bold page-scroll text-dark">
                About
              </a>
            </li>
            <li class="nav-item">
              <a className="fs-2 fw-bold page-scroll text-dark">Articles</a>
            </li>
            <li class="nav-item">
              <a
                className="fs-2 fw-bold page-scroll text-dark"
                onClick={() => history.push("/register")}
              >
                User Signup
              </a>
            </li>
            <li class="nav-item">
              <a
                className="fs-2 fw-bold page-scroll text-dark"
                onClick={() => history.push("/registerdoc")}
              >
                Doctor Signup
              </a>
            </li>
            <li class="nav-item">
              <a
                className="fs-2 fw-bold page-scroll text-dark"
                onClick={() => history.push("/login")}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
