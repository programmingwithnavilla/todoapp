import React, { Component } from "react";
import Task from "../../component/specific/Task";
import "./home.scss";
type MyProps = {
  // using `interface` is also ok
  message?: string;
};
type MyState = {
  count: number; // like this
  list: any;
};
class Home extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
    list: [
      {
        id: 1,
        taskTitle: "Konsep hero title yang menarik",
        prority: "low",
        isEdit: false,
      },
      {
        id: 2,
        taskTitle: "Icon di section our services",
        prority: "medium",
        isEdit: false,
      },
      {
        id: 3,
        taskTitle: "services",
        prority: "high",
        isEdit: false,
      },
    ],
  };

  addTask = (type: String) => {
    const { list } = this.state;
    list.unshift({
      id: 3,
      taskTitle: "",
      type: "",
      isEdit: true,
    });

    this.setState({ list });
  };
  updateTask = (type: String, task: any) => {
    console.log("update task", task);
    const { list } = this.state;
    let index = list.findIndex((lst: any) => lst.id === task.id);
    if (index != -1) {
      list[index] = task;
      this.setState({ list });
    }
  };
  deleteTask = (type: String, id: string) => {
    const { list } = this.state;
    console.log("id", id);
    list.splice(
      list.findIndex((x: any) => x.id === id),
      1
    );
    this.setState({ list });
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
            <div className="project-column px-3">
              <div className="project-column-heading  py-2 rounded px-1 mt-2 mb-3">
                <div className="d-flex">
                  <div className="project-column-heading__title h2 m-0">
                    Back Log
                  </div>
                  <span className="badge mx-2">2</span>
                </div>
                <button className="btm-new-item mx-1">New Item</button>
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
            <div className="project-column px-3">
              <div className="project-column-heading  py-2 rounded px-1 mt-2 mb-3">
                <div className="d-flex">
                  <div className="project-column-heading__title h2 m-0">
                    In Progress
                  </div>
                  <span className="badge mx-2">2</span>
                </div>
                <button
                  className="btm-new-item mx-1"
                  onClick={() => this.addTask("inProgress")}
                >
                  New Item
                </button>
              </div>
              {this.state.list.map((lst: any) => (
                <Task
                  {...lst}
                  updateTask={this.updateTask}
                  deleteTask={this.deleteTask}
                />
              ))}
            </div>
            <div className="project-column px-3">
              <div className="project-column-heading  py-2 rounded px-1 mt-2 mb-3">
                <div className="d-flex">
                  <div className="project-column-heading__title h2 m-0">
                    Done
                  </div>
                  <span className="badge mx-2">2</span>
                </div>
                <button className="btm-new-item mx-1">New Item</button>
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
