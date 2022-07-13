import React, { useState, memo } from "react";
import { Conditional } from "../../utils/consts/index";
import "./Task.scss";

interface ITask {
  id: string;
  taskTitle: string;
  prority: string;
  isEdit: Boolean;
  updateTask: Function;
  deleteTask: Function;
}
const Task = ({
  id,
  taskTitle,
  prority,
  isEdit,
  updateTask,
  deleteTask,
}: ITask): JSX.Element => {
  let [title, setTitle] = useState("");
  let [prorityTask, setPrority] = useState("low");
  return (
    <div className={"task"} draggable="true">
      <div className="task__tags">
        <Conditional checkRender={!isEdit}>
          <span className={`task__tag task__tag--${prority}`}>{prority}</span>
          <button
            className="btn-delete mx-1"
            onClick={() => {
              deleteTask("inprogress", id);
            }}
          >
            Del
          </button>
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
            if (event.key === "Enter") {
              updateTask("inprogres", {
                id,
                taskTitle: title,
                prority: prorityTask,
                isEdit: false,
              });
              setTitle("");
              setPrority("low");
            }
          }}
        />
      </Conditional>
      <Conditional checkRender={!isEdit}>
        <p>{taskTitle}</p>
      </Conditional>
    </div>
  );
};

export default memo(Task);
