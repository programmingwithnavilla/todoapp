import React, { Component, FormEvent } from "react";
import { Conditional } from "../../utils/consts/index";
import { v4 as uuidv4 } from "uuid";
import "./note.scss";

type IState = {
  notes: any;
  noteTitle: string;
  noteDescription: string;
  background: string;
};
class Note extends React.Component<any, IState> {
  state: IState = {
    notes: [],
    noteTitle: "",
    noteDescription: "",
    background: "bg-green",
  };

  componentDidMount() {
    this.fetchAllNote();
  }
  fetchAllNote = () => {
    if (localStorage.getItem("notes")) {
      this.setState({ notes: JSON.parse(localStorage.getItem("notes")!) });
    }
  };
  addNote = () => {
    console.log("noteshjbs");
    const { notes } = this.state;
    notes.push({
      id: uuidv4(),
      title: "",
      description: "",
      background: "bg-green",
      date: new Date(),
      editStatus: "insert",
    });
    this.setState({ notes });
  };
  editNote = (id: string) => {
    const { notes } = this.state;
    let index = notes.findIndex((note: any) => note.id === id);
    notes[index].isEdit = true;
    this.setState({
      notes,
      noteDescription: notes[index].description,
    });
  };
  insertNote = () => {
    const { noteTitle, background, noteDescription } = this.state;
    let notes = [];
    if (noteTitle.length > 0 && noteDescription.length > 2) {
      if (localStorage.getItem("notes")) {
        notes = JSON.parse(localStorage.getItem("notes")!);
      }
      notes.push({
        id: uuidv4(),
        title: noteTitle,
        description: noteDescription,
        background: background,
        date: new Date(),
        editStatus: "",
      });
      localStorage.setItem("notes", JSON.stringify(notes));
      this.resetForm();
      this.fetchAllNote();
    }
  };
  updateNote = (id: string) => {
    const { noteDescription, background } = this.state;
    let notes = JSON.parse(localStorage.getItem("notes")!);
    let index = notes.findIndex((x: any) => x.id === id);
    notes[index].description = noteDescription;
    notes[index].background = background;
    localStorage.setItem("notes", JSON.stringify(notes));
    this.resetForm();
    this.fetchAllNote();
  };

  resetForm = () => {
    this.setState({
      noteTitle: "",
      noteDescription: "",
      background: "bg-green",
    });
  };
  textOnchnage = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    let newState = { [name]: value } as Pick<IState, any>;
    this.setState(newState);
  };

  deleteNote = (id: string) => {
    let notes = JSON.parse(localStorage.getItem("notes")!);
    notes.splice(
      notes.findIndex((x: any) => x.id === id),
      1
    );
    localStorage.setItem("notes", JSON.stringify(notes));
    this.fetchAllNote();
  };

  render() {
    const { notes, noteTitle, noteDescription, background } = this.state;
    return (
      <div className="col note d-flex flex-column">
        <div className="w-100 d-flex justify-content-end px-4">
          <button
            className="col-2 py-2 mx-5 btn-new-note border-0"
            onClick={() => {
              this.addNote();
            }}
          >
            New Note
          </button>
        </div>
        <div className="w-100 d-flex mt-2 justify-content-start flex-wrap">
          {notes.length > 0 &&
            notes.map((note: any) => (
              <div
                key={note.id}
                className={`col-3 note-item mx-5 my-3 p-3 d-flex flex-column ${note.background}`}
              >
                <div className="d-flex justify-content-between note-title pb-2">
                  <Conditional checkRender={note.editStatus !== "insert"}>
                    <div>
                      <span>{note.title}</span>
                    </div>
                  </Conditional>
                  <Conditional checkRender={note.editStatus === "insert"}>
                    <input
                      name="noteTitle"
                      value={noteTitle}
                      placeholder="Enter a title"
                      onChange={(e: any) => this.textOnchnage(e)}
                      className="col-8 border-0 rounded  px-2 py-2 font-small"
                    />
                  </Conditional>
                  <div className="d-flex align-items-center">
                    <Conditional checkRender={note.editStatus !== "insert"}>
                      <button
                        className="note-btn btn-delete mx-1"
                        onClick={() => this.deleteNote(note.id)}
                      >
                        Del
                      </button>
                      <button
                        className="note-btn btn-edit mx-1"
                        onClick={() => this.editNote(note.id)}
                      >
                        Edit
                      </button>
                    </Conditional>
                    <Conditional checkRender={note.isEdit}>
                      <button
                        className="note-btn btn-edit mx-1"
                        onClick={() => this.updateNote(note.id)}
                      >
                        Submit
                      </button>
                    </Conditional>
                    <Conditional checkRender={note.editStatus === "insert"}>
                      <button
                        className="note-btn btn-edit mx-1"
                        onClick={() => this.insertNote()}
                      >
                        Add
                      </button>
                    </Conditional>
                  </div>
                </div>
                <div className="note-description">
                  <Conditional checkRender={!note.isEdit}>
                    {note.description}
                  </Conditional>
                  <Conditional checkRender={note.editStatus === "insert"}>
                    <textarea
                      name="noteDescription"
                      placeholder="Enter a description for this note"
                      onChange={(e: any) => this.textOnchnage(e)}
                      className="col-12 border-0 p-2 rounded"
                      rows={10}
                      value={noteDescription}
                    />
                  </Conditional>
                  <Conditional checkRender={note.isEdit}>
                    <textarea
                      name="noteDescription"
                      onChange={(e: any) => this.textOnchnage(e)}
                      className="col-12 border-0 p-2 rounded"
                      rows={10}
                      value={noteDescription}
                    />
                  </Conditional>
                </div>
                <div className="text-muted py-2 note-date">
                  <span> Created on</span>
                  <span className="px-1">
                    {new Date(note.date).toDateString()}
                  </span>
                </div>
                <div className="col d-flex">
                  <button
                    className={`circle bg-yellow
                  ${note.isEdit && background === "bg-yellow" ? "shadow" : ""}
                  `}
                    onClick={() => {
                      if (note.isEdit) {
                        this.setState({ background: "bg-yellow" });
                      }
                    }}
                  />
                  <button
                    className={`circle bg-purple
                  ${note.isEdit && background === "bg-purple" ? "shadow" : ""}
                  `}
                    onClick={() => {
                      if (note.isEdit) {
                        this.setState({ background: "bg-purple" });
                      }
                    }}
                  />
                  <button
                    className={`
                  circle bg-blue
                   ${note.isEdit && background === "bg-blue" ? "shadow" : ""}
                  `}
                    onClick={() => {
                      if (note.isEdit) {
                        this.setState({ background: "bg-blue" });
                      }
                    }}
                  />
                  <button
                    className={`circle bg-pink
                  ${note.isEdit && background === "bg-pink" ? "shadow" : ""}
                  `}
                    onClick={() => {
                      if (note.isEdit) {
                        this.setState({ background: "bg-pink" });
                      }
                    }}
                  />
                  <button
                    className={`circle bg-green 
                  ${note.isEdit && background === "bg-green" ? "shadow" : ""}
                  `}
                    onClick={() => {
                      if (note.isEdit) {
                        this.setState({ background: "bg-green" });
                      }
                    }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Note;
