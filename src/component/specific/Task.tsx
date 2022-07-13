import React, { useState, memo } from "react";
import { Conditional } from "../../utils/consts/index";
import "./Task.scss";

interface ITask {
  id: string;
  taskTitle: string;
  prority: string;
  status: string;
  isEdit: Boolean;
  updateTask: Function;
  deleteTask: Function;
  changeStatus: Function;
}
const Task = ({
  id,
  taskTitle,
  prority,
  status,
  isEdit,
  updateTask,
  deleteTask,
  changeStatus,
}: ITask): JSX.Element => {
  let [title, setTitle] = useState("");
  let [prorityTask, setPrority] = useState("low");
  return (
    <div className={"task"} draggable="true">
      <div className="task__tags">
        <Conditional checkRender={!isEdit}>
          <>
            <button
              className="btn-task  task-delete mx-1"
              onClick={() => {
                deleteTask(status, id);
              }}
            >
              Del
            </button>
            <button
              className="btn-task  task-edit mx-1"
              onClick={() => {
                deleteTask(status, id);
              }}
            >
              Edit
            </button>
            <Conditional checkRender={status === "backlog"}>
              <button
                className="btn-task  task-done mx-1"
                onClick={() => {
                  changeStatus("Inprogress", id);
                }}
              >
                Inprogres
              </button>
            </Conditional>
            <Conditional checkRender={status === "inprogres"}>
              <button
                className="btn-task  task-done mx-1"
                onClick={() => {
                  changeStatus("done", id);
                }}
              >
                Done
              </button>
            </Conditional>
            <Conditional checkRender={status === "done"}>
              <button
                className="btn-task  task-done mx-1"
                onClick={() => {
                  changeStatus("backlog", id);
                }}
              >
                Backlog
              </button>
            </Conditional>
          </>
        </Conditional>
        <Conditional checkRender={isEdit}>
          <div className="col d-flex justify-content-between">
            <button
              className={`
              border-0
              task__tag 
              ${prorityTask === "low" && "task__tag--low"}
              `}
              onClick={() => setPrority("low")}
            >
              Low
            </button>
            <button
              className={`border-0 task__tag 
               ${prorityTask === "medium" && "task__tag--medium"}`}
              onClick={() => setPrority("medium")}
            >
              Medium
            </button>
            <button
              onClick={() => setPrority("high")}
              className={`
              border-0
              task__tag 
              ${prorityTask === "high" && "task__tag--high"}
              `}
            >
              High
            </button>
          </div>
        </Conditional>
      </div>
      <Conditional checkRender={isEdit}>
        <input
          placeholder="Enter a title for this card…"
          className="col-12 rounded border p-1 mt-3 border-0"
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value);
          }}
          onKeyUp={(event) => {
            console.log("id", id);
            if (event.key === "Enter") {
              updateTask(status, {
                id,
                taskTitle: title,
                prority: prorityTask,
                isEdit: false,
                status: status,
              });
              setTitle("");
              setPrority("low");
            }
          }}
        />
      </Conditional>
      <Conditional checkRender={!isEdit}>
        <>
          <p>{taskTitle}</p>
          <span className={`task__tag task__tag--${prority}`}>{prority}</span>
        </>
      </Conditional>
    </div>
  );
};

export default memo(Task);
