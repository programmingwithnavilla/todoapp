import React, { Component, FormEvent } from "react";
import AuthBox from "../../component/common/AuthBox";
import { Conditional } from "../../utils/consts";
import { withRouter } from "../../Hoc/WithRouter";
import "./signin.scss";

interface IState {
  userName: string;
  password: string;
  error: any;
}
class Signin extends Component<any, IState> {
  state: IState = {
    userName: "",
    password: "",
    error: {},
  };

  inputOnchange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    let newState = { [name]: value } as Pick<IState, any>;
    this.setState(newState);
  };
  signin = () => {
    const { userName, password, error } = this.state;
    if (this.handleValidation()) {
      if (localStorage.getItem("users")) {
        let users = JSON.parse(localStorage.getItem("users")!);
        if (
          users.find(
            (user: any) =>
              user.userName === userName && user.password === password
          )
        ) {
          this.props.navigate("/home");
        } else {
          error.user = "user not found";
          this.setState({ error });
        }
      } else {
        error.user = "user not found";
        this.setState({ error });
      }
    }
  };
  handleValidation() {
    const { password, userName } = this.state;
    let errors: any = {};
    let formIsValid = true;
    let regUserName = new RegExp("^([a-zA-Z0-9]){8,}$");
    let regPass = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
    //userName
    if (!userName) {
      formIsValid = false;
      errors["userName"] = "Cannot be empty";
    }

    if (typeof userName !== "undefined") {
      if (!regUserName.test(userName)) {
        formIsValid = false;
        errors["userName"] =
          "must include 8 characters 1 uppercase 1 lowercase and 1 digit";
      }
    }

    //Password
    if (!password) {
      formIsValid = false;
      errors["password"] = "Password cannot be empty";
    }

    if (typeof password !== "undefined") {
      if (!regPass.test(password)) {
        formIsValid = false;
        errors["password"] =
          "must include 8 characters 1 uppercase 1 lowercase and 1 digit";
      }
    }

    this.setState({ error: errors });
    return formIsValid;
  }
  render() {
    const { userName, password, error } = this.state;
    return (
      <section className="h-100 gradient-form">
        <div className="container py-4 py-sm-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-lg text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          We are The Lotus Team
                        </h4>
                      </div>
                      <form>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            UserName
                          </label>
                          <input
                            type="text"
                            name="userName"
                            value={userName}
                            onChange={this.inputOnchange}
                            className="form-control"
                          />
                          <Conditional checkRender={error.userName}>
                            <span className="text-danger">
                              {error.userName}
                            </span>
                          </Conditional>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            password
                          </label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.inputOnchange}
                            id="form2Example22"
                            className="form-control"
                          />
                          <Conditional checkRender={error.password}>
                            <span className="text-danger">
                              {error.password}
                            </span>
                          </Conditional>
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="col-12 btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 text-white border-0 rounded py-2"
                            type="button"
                            onClick={this.signin}
                          >
                            Log in
                          </button>
                          <Conditional checkRender={error.user}>
                            <span className="text-danger">{error.user}</span>
                          </Conditional>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => this.props.navigate("/signup")}
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-flex align-items-center gradient-custom-2">
                    <AuthBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// export default Signin;
export default withRouter(Signin);
