import React, { Component } from "react";
import "./home.scss";
type MyProps = {
  // using `interface` is also ok
  message?: string;
};
type MyState = {
  count: number; // like this
};
class Home extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };
  render() {
    return (
      <div className="app">
        <main className="project">
          <div className="project-info">
            <h1>Homepage Design</h1>
            <div className="project-participants">
              <span />
              <span />
              <span />
              <button className="project-participants__add">
                Add Participant
              </button>
            </div>
          </div>
          <div className="project-tasks">
            <div className="project-column">
              <div className="project-column-heading">
                <h2 className="project-column-heading__title m-0">
                  Task Ready
                </h2>
                <span className="badge">2</span>
              </div>
              <div className="task" draggable="true">
                <div className="task__tags">
                  <span className="task__tag task__tag--copyright">
                    Copywriting
                  </span>
                </div>
                <p>Konsep hero title yang menarik</p>
              </div>
              <div className="task" draggable="true">
                <div className="task__tags">
                  <span className="task__tag task__tag--design">UI Design</span>
                </div>
                <p>Icon di section our services</p>
              </div>
              <div className="task" draggable="true">
                <div className="task__tags">
                  <span className="task__tag task__tag--copyright">
                    Copywriting
                  </span>
                </div>
                <p>Konsep hero title yang menarik</p>
              </div>
            </div>
            <div className="project-column">
              <div className="project-column-heading">
                <h2 className="project-column-heading__title m-0">
                  In Progress
                </h2>
                <span className="badge">2</span>
              </div>
            </div>
            <div className="project-column">
              <div className="project-column-heading">
                <h2 className="project-column-heading__title m-0">
                  Needs Review
                </h2>
                <span className="badge">2</span>
              </div>
            </div>
            <div className="project-column">
              <div className="project-column-heading">
                <h2 className="project-column-heading__title m-0">Done</h2>
                <span className="badge">2</span>
              </div>
            </div>
          </div>
        </main>
        <aside className="task-details">A</aside>
      </div>
    );
  }
}

export default Home;
