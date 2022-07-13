import React, { Component } from "react";
import "./profile.scss";
type MyProps = {
  // using `interface` is also ok
  message?: string;
};
type MyState = {
  count: number; // like this
};
class Profile extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };
  render() {
    return (
      <div>
        <div className="app-container">
          <div className="app-content">
            <div className="projects-section d-flex flex-column h-100">S</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
