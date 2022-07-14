import React, { useState, memo } from "react";
interface INote {
  id: string;
  description: string;
  title: string;
  background: string;
  date: string;
  editStatus: string;
}

const Note = ({
  id,
  editStatus,
  description,
  title,
  background,
  date,
}: INote): JSX.Element => {
  return (
    <div
      key={id}
      className={`note-item  my-3 py-3 d-flex flex-column ${background}`}
    >
      <div className="d-flex justify-content-between note-title pb-2">
        <div>
          <span>{title}</span>
        </div>
      </div>
      <div className="note-description">
        <span>{description}</span>
      </div>
      <div className="text-muted py-2 note-date">
        <span> Created on</span>
        <span className="px-1">{new Date(date).toDateString()}</span>
      </div>
    </div>
  );
};

export default memo(Note);
