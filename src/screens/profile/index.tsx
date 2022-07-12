import React, { Component } from "react";
import Sidebar from "../../component/common/Sidebar";
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
          <div className="app-header">
            <div className="app-header-left">
              <span className="app-icon" />
              <p className="app-name">Portfolio</p>
              <div className="search-wrapper">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="feather feather-search"
                  viewBox="0 0 24 24"
                >
                  <defs />
                  <circle cx={11} cy={11} r={8} />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </div>
            <div className="app-header-right">
              <button className="mode-switch" title="Switch Theme">
                <svg
                  className="moon"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <defs />
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </button>
              <button className="add-btn" title="Add New Project">
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg>
              </button>
              <button className="notification-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </button>
              <button className="profile-btn">
                <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
                <span>Aybüke C.</span>
              </button>
            </div>
          </div>
          <div className="app-content">
            <Sidebar />
            <div className="projects-section">S</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
