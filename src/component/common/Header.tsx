import React from "react";
import "./Header.scss";
type AppProps = {
  message?: string;
};

const Header = ({ message }: AppProps) => (
  <div className="header d-flex align-items-center justify-content-between position-relative">
    <div className="header-left">
      <span className="header-icon" />
      <p className="header-name mx-4 my-2 px-2">Portfolio</p>
      <div className="search-wrapper rounded-pill">
        <input className="search-input" type="text" placeholder="Search" />
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
    <div className="header-right">
      <button
        className="mode-switch
      d-flex align-items-center justify-content-center
      "
        title="Switch Theme"
      >
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
      <button
        className="add-btn d-flex align-items-center justify-content-center rounded-circle border-0 p-0"
        title="Add New Project"
      >
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
      <button className="notification-btn d-flex align-items-center justify-content-center border-0 p-0">
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
      <button className="profile-btn d-flex align-items-center border-0 p-0">
        <img
          src="https://assets.codepen.io/3306515/IMG_2025.jpg"
          alt="userImage"
        />
        <span>Aybüke C.</span>
      </button>
    </div>
  </div>
);

export default Header;
