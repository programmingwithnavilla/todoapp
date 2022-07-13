import React from "react";
import Router from "./router";
import Sidebar from "./component/common/Sidebar";
import Header from "./component/common/Header";
import "./index.scss";

const App = () => {
  return (
    <div className="col d-flex flex-column">
      <div className="col">
        <Header />
      </div>
      <div className="col d-flex">
        <Sidebar />
        <Router />
      </div>
    </div>
  );
};

export default App;
