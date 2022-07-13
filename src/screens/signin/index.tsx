import React, { Component, FormEvent } from "react";
import { withRouter } from "../../Hoc/WithRouter";
import "./signin.scss";

interface IState {
  userName: string;
  password: string;
}
class Signin extends Component<any, IState> {
  state: IState = {
    userName: "",
    password: "",
  };

  inputOnchange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    let newState = { [name]: value } as Pick<IState, any>;
    this.setState(newState);
  };
  signin = () => {
    const { userName, password } = this.state;

    if (localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users")!);
      if (
        users.find(
          (user: any) =>
            user.userName === userName && user.password === password
        )
      ) {
        this.props.navigate("/home");
      } else console.error("ss");
    } else console.error("ss");
  };

  render() {
    const { userName, password } = this.state;
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
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="col-12 btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 text-white border-0 rounded py-2"
                            type="button"
                            onClick={this.signin}
                          >
                            Log in
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
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
