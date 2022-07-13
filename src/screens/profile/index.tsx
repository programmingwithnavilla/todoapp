import React, { Component } from "react";
import { profile } from "console";
import "./profile.scss";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
  };

  handleTextChange = (event: any) => {
    const { name: stateName, value } = event.target;
    this.setState({ [stateName]: value });
  };
  btnClick = () => {
    console.log("clickkkkkk");
  };
  render(): any {
    let { firstName, lastName, userName, password } = this.state;
    return (
      <div
        id="container"
        className="profile d-flex container flex-column align-items-start p-5"
      >
        <h5 className="navy-color">Profile</h5>
        <div className="d-flex w-100 py-4 justify-content-center align-items-start  ">
          <div className="card w-25 card-border-radius align-items-center flex-column  card-min-height p-2 justify-content-between ">
            <div className="d-flex flex-column align-items-center border-bottom border-gray w-100 py-2">
              <img
                data-holder-rendered="true"
                className="profile-img rounded-circle "
                src={
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                }
                alt="profile Image"
              />
              <h4 className="d-flex w-100 justify-content-center  pt-3 navy-color ">
                Navid Barsalari
              </h4>
              <h6 className=" d-flex w-100 justify-content-center gray-color">
                Full-Stack Developer
              </h6>
            </div>
            <div className="d-flex w-100 flex-column px-1 align-items-start py-3">
              <div className="d-flex w-100  gray-color font-weight-bold medium pb-2">
                Developer
              </div>
              <div className="d-flex w-100  gray-color font-weight-normal small text-start ">
                I have a 5 years Experience in mobile and web application. I
                worked with React.js , React.Native , Node.js
              </div>
            </div>
          </div>
          <div className="d-flex flex-column card w-75 mx-4 card-border-radius card-min-height p-2  justify-content-start">
            <div className="d-flex w-100 navy-color px-3  medium font-weight-bold border-bottom border-gray py-2">
              Account Detail
            </div>
            <div
              id="form"
              className="d-flex  w-100  align-items-start justify-content-start p-3 flex-column"
            >
              <div className="d-flex w-100  align-items-center justify-content-between ">
                <div
                  id="firstName"
                  className="d-flex  flex-column align-items-start "
                >
                  <div className=" d-flex text-gray w-100 ">First Name</div>
                  <div className=" d-flex  text-gray w-100 pt-2 ">
                    <input
                      className="w-100"
                      name="firstName"
                      value={firstName}
                      onChange={(event) => this.handleTextChange(event)}
                    />
                  </div>
                </div>
                <div
                  id="lastName"
                  className="d-flex  flex-column align-items-start "
                >
                  <div className=" d-flex text-gray w-100 ">Last Name</div>
                  <div className=" d-flex  text-gray w-100 pt-2 ">
                    <input
                      className="w-100"
                      name="lastName"
                      value={lastName}
                      onChange={(event) => this.handleTextChange(event)}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex w-100  align-items-center justify-content-between mt-3">
                <div
                  id="userName"
                  className="w-50 d-flex  flex-column align-items-start "
                >
                  <div className=" d-flex text-gray w-100 ">UserName</div>
                  <div className=" d-flex  text-gray w-100 pt-2 ">
                    <input
                      className="w-100"
                      autoComplete="off"
                      name="userName"
                      value={userName}
                      onChange={(event) => this.handleTextChange(event)}
                    />
                  </div>
                </div>
                <div
                  id="password"
                  className="d-flex  flex-column align-items-start "
                >
                  <div className=" d-flex text-gray w-100 ">Password</div>
                  <div className=" d-flex  text-gray w-100 pt-2 ">
                    <input
                      className="w-100"
                      autoComplete="off"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(event) => this.handleTextChange(event)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-100 d-flex  align-items-center justify-content-end mt-4">
                <button
                  className="btn btn-grad py-2 "
                  onClick={() => this.btnClick()}
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
