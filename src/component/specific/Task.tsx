import React, { useState, memo } from "react";
import { Conditional } from "../../utils/consts/index";
import "./Task.scss";

interface ITask {
  id: string;
  taskTitle: string;
  prority: string;
  status: string;
  editStatus: string;
  insertTask: Function;
  deleteTask: Function;
  updateTask: Function;
  changeStatus: Function;
}
const Task = ({
  id,
  taskTitle,
  prority,
  status,
  editStatus,
  insertTask,
  updateTask,
  deleteTask,
  changeStatus,
}: ITask): JSX.Element => {
  let [title, setTitle] = useState("");
  let [prorityTask, setPrority] = useState("low");
  let [isEdit, setIsEdit] = useState(false);
  return (
    <div className={"task"} draggable="true">
      <div className="task__tags">
        <Conditional checkRender={editStatus === "" && !isEdit}>
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
                setIsEdit(true);
                setTitle(taskTitle);
              }}
            >
              Edit
            </button>
            <Conditional checkRender={status === "backlog"}>
              <button
                className="btn-task  task-done mx-1"
                onClick={() => {
                  changeStatus("inprogres", id);
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
        <Conditional checkRender={editStatus !== "" || isEdit}>
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
      <Conditional checkRender={editStatus === "edit"}>
        <input
          placeholder="Enter a title for this card…"
          className="col-12 rounded border p-1 mt-3 mb-1 border-0"
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value);
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              insertTask(status, {
                id,
                taskTitle: title,
                prority: prorityTask,
                editStatus: "",
                status: status,
              });
              setTitle("");
              setPrority("low");
            }
          }}
        />
      </Conditional>
      <Conditional checkRender={editStatus === "edit"}>
        <button
          className="btn-task  task-done mx-0 mt-1 pt-1"
          onClick={() => {
            insertTask(status, {
              id,
              taskTitle: title,
              prority: prorityTask,
              editStatus: "",
              status: status,
            });
            setTitle("");
            setPrority("low");
          }}
        >
          Submit
        </button>
      </Conditional>
      <Conditional checkRender={isEdit}>
        <input
          className="col-12 rounded border p-1 mt-3 border-0"
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value);
          }}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              updateTask({
                id,
                taskTitle: title,
                prority: prorityTask,
                editStatus: "",
                status: status,
              });
              setIsEdit(false);
              setTitle("");
              setPrority("low");
            }
          }}
        />
      </Conditional>
      <Conditional checkRender={isEdit}>
        <button
          className="btn-task  task-done mx-0 mt-1 pt-1"
          onClick={() => {
            updateTask({
              id,
              taskTitle: title,
              prority: prorityTask,
              editStatus: "",
              status: status,
            });
            setIsEdit(false);
            setTitle("");
            setPrority("low");
          }}
        >
          Update
        </button>
      </Conditional>
      <Conditional checkRender={editStatus === "" && !isEdit}>
        <>
          <p>{taskTitle}</p>
          <span className={`task__tag task__tag--${prority}`}>{prority}</span>
        </>
      </Conditional>
    </div>
  );
};

export default memo(Task);
