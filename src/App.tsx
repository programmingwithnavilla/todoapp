import React from "react";
import Router from "./router";
import Sidebar from "./component/common/Sidebar";
import Header from "./component/common/Header";
import { Conditional } from "./utils/consts";
import { useLocation } from "react-router-dom";
import "./index.scss";

const App = () => {
  let isExcludedMatch = ["/", "/signin", "/signup"].includes(
    useLocation().pathname
  );
  return (
    <div className="col d-flex flex-column">
      <Conditional checkRender={!isExcludedMatch}>
        <div className="col">
          <Header />
        </div>
      </Conditional>

      <div className={`col ${!isExcludedMatch && "d-flex"} `}>
        <Conditional checkRender={!isExcludedMatch}>
          <Sidebar />
        </Conditional>
        <Router />
      </div>
    </div>
  );
};

export default App;
