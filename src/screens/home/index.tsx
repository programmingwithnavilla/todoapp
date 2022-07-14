import React, { Component } from "react";
import Task from "../../component/specific/Task";
import Note from "../../component/specific/Note";
import { Conditional } from "../../utils/consts/index";
import { groupBy } from "../../utils/consts/index";
import { v4 as uuidv4 } from "uuid";
import "./home.scss";

type Istate = {
  count: number; // like this
  list: any;
  notes: any;
};
class Home extends React.Component<any, Istate> {
  state: Istate = {
    count: 0,
    list: {},
    notes: [],
  };

  componentDidMount() {
    this.fetchAllTask();
    this.fetchNote();
  }

  fetchAllTask = () => {
    if (localStorage.getItem("tasks")) {
      let tasks = groupBy(JSON.parse(localStorage.getItem("tasks")!), "status");
      this.setState({ list: tasks });
    }
  };
  fetchNote = () => {
    if (localStorage.getItem("notes")) {
      this.setState({
        notes: JSON.parse(localStorage.getItem("notes")!).splice(-3),
      });
    }
  };
  addTask = (type: string) => {
    const { list } = this.state;
    if (list[type])
      list[type].unshift({
        id: uuidv4(),
        taskTitle: "",
        type: "",
        status: type,
        editStatus: "edit",
      });
    else {
      list[type] = [
        {
          id: uuidv4(),
          taskTitle: "",
          type: "",
          status: type,
          editStatus: "edit",
        },
      ];
    }
    console.log("after", list[type]);
    this.setState({ list });
  };
  insertTask = (type: string, task: any) => {
    const { list } = this.state;
    let tasks = [];
    if (localStorage.getItem("tasks"))
      tasks = JSON.parse(localStorage.getItem("tasks")!);
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.fetchAllTask();
  };
  deleteTask = (type: string, id: string) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")!);
    tasks.splice(
      tasks.findIndex((x: any) => x.id === id),
      1
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.fetchAllTask();
  };

  updateTask = (task: any) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")!);
    let index = tasks.findIndex((x: any) => x.id === task.id);
    tasks[index] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.fetchAllTask();
  };

  changeStatus = (status: string, id: string) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")!);
    tasks.find((task: any) => task.id === id).status = status;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.fetchAllTask();
  };
  render() {
    const { list, notes } = this.state;
    let listIsEmpty = Object.keys(list).length === 0;
    return (
      <div className="app d-sm-flex">
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
                </div>
                <button
                  className="btm-new-item mx-1"
                  onClick={() => this.addTask("backlog")}
                >
                  New Item
                </button>
              </div>
              {!listIsEmpty &&
                list.backlog &&
                list.backlog.map((lst: any) => (
                  <Task
                    {...lst}
                    insertTask={this.insertTask}
                    deleteTask={this.deleteTask}
                    updateTask={this.updateTask}
                    changeStatus={this.changeStatus}
                  />
                ))}
            </div>
            <div className="project-column px-3">
              <div className="project-column-heading  py-2 rounded px-1 mt-2 mb-3">
                <div className="d-flex">
                  <div className="project-column-heading__title h2 m-0">
                    In Progress
                  </div>
                </div>
                <button
                  className="btm-new-item mx-1"
                  onClick={() => this.addTask("inprogres")}
                >
                  New Item
                </button>
              </div>
              {!listIsEmpty &&
                list.inprogres &&
                list.inprogres.map((lst: any) => (
                  <Task
                    {...lst}
                    insertTask={this.insertTask}
                    deleteTask={this.deleteTask}
                    updateTask={this.updateTask}
                    changeStatus={this.changeStatus}
                  />
                ))}
            </div>
            <div className="project-column px-3">
              <div className="project-column-heading  py-2 rounded px-1 mt-2 mb-3">
                <div className="d-flex">
                  <div className="project-column-heading__title h2 m-0">
                    Done
                  </div>
                </div>
                <button
                  className="btm-new-item mx-1"
                  onClick={() => this.addTask("done")}
                >
                  New Item
                </button>
              </div>
              {!listIsEmpty &&
                list.done &&
                list.done.map((lst: any) => (
                  <Task
                    {...lst}
                    insertTask={this.insertTask}
                    deleteTask={this.deleteTask}
                    updateTask={this.updateTask}
                    changeStatus={this.changeStatus}
                  />
                ))}
            </div>
          </div>
        </main>
        <aside className="task-details">
          <Conditional checkRender={notes.length > 0}>
            <div>
              {notes.map((note: any) => (
                <Note {...note} />
              ))}
            </div>
          </Conditional>
          <Conditional checkRender={notes.length === 0}>
            <span>no notes</span>
          </Conditional>
        </aside>
      </div>
    );
  }
}

export default Home;
