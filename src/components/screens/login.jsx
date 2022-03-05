import React from "react";
import "./login.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
        doctor: "false",
      },
    };
  }
  onChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onReset = (eve) => {
    this.setState({ data: { ...this.state.data, email: "", password: "" } });
  };
  onChangeToggle = (e) => {
    if (e.target.value === "false") {
      this.setState({ data: { ...this.state.data, [e.target.name]: "true" } });
    } else {
      this.setState({ data: { ...this.state.data, [e.target.name]: "false" } });
    }
    console.log(this.state.data.doctor);
  };
  onSubmitSignIn = (event) => {
    console.log(this.state.data);
    event.preventDefault();
    fetch("http://localhost:3001/api/signin", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.data.email,
        password: this.state.data.password,
        doctor: this.state.data.doctor,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user.doctor);
        if (user.email && user.doctor === false) {
          localStorage.setItem("user", JSON.stringify(user));
          this.props.history.push("/dashboard");
        } else if (user.email && user.doctor === true) {
          localStorage.setItem("user", JSON.stringify(user));
          this.props.history.push("/dashboarddoc");
        } else {
          alert("No matching Credentials!");
        }
      });
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <section class="vh-100">
          <div class="container-fluid h-custom p-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-8 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  class="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div class="col-md-4 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <p className="fw-bold fs-2">Login</p>
                  {/* <!-- Email input --> */}
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div class="form-outline mb-3">
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                  </div>

                  <div class="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      class="btn btn-primary btn-lg"
                      style={{
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                      }}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default LoginPage;
