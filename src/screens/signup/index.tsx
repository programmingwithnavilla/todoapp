import React, { Component, FormEvent } from "react";
import AuthBox from "../../component/common/AuthBox";
import { withRouter } from "../../Hoc/WithRouter";
import "./signup.scss";
interface IState {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}
class Signup extends Component<any, IState> {
  state: IState = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  };

  inputOnchange = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    let newState = { [name]: value } as Pick<IState, any>;
    this.setState(newState);
  };

  signup = () => {
    let users: any = [];
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users")!);
      users.push(this.state);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users.push(this.state);
      localStorage.setItem("users", JSON.stringify(users));
    }
    this.props.navigate("/home");
  };
  render() {
    const { firstName, lastName, userName, password } = this.state;
    return (
      <section className="h-100 gradient-form">
        <div className="container py-3 py-sm-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-lg text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body py-md-3 px-md-5 mx-md-4">
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
                            htmlFor="form2Example11"
                          >
                            FirstName
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.inputOnchange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            LastName
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.inputOnchange}
                            className="form-control"
                          />
                        </div>
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
                        <div className="text-center pt-1 mb-3 pb-1">
                          <button
                            className="col-12 btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 text-white border-0
                            rounded py-2
                            "
                            type="button"
                            onClick={() => {
                              this.signup();
                            }}
                          >
                            sign in
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

export default withRouter(Signup);
