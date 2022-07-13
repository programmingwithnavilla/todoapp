import React, { Component, FormEvent } from "react";
import { Conditional } from "../../utils/consts/index";
import "./note.scss";
type MyProps = {
  // using `interface` is also ok
  message?: string;
};
type IState = {
  notes: any;
  editNote: string;
  background: string;
};
class Note extends React.Component<MyProps, IState> {
  state: IState = {
    notes: [
      {
        id: 1,
        title: "Groceries",
        description:
          "Traditionally in larger towns or cities, a grocery store sold groceries, that was, produce from farms: vegetables, fruit, maybe some eggs and dairy products. Meat would be bought at the butcher's; beer, wine or liquor at a liquor store, pub, bar or from the maker; flour, sugar and other items from a dry goods store; medicines from the pharmacy, and so on.",
        background: "bg-yellow",
        date: new Date(),
        isEdit: false,
      },
      {
        id: 2,
        title: "meeting",
        description:
          "A meeting is the place where the group revises, updates, and adds to what it knows as a group. Every group creates its own pool of shared knowledge, experience, judgment, and folklore. But the pool consists only of what the individuals have experienced or discussed as a group.",
        background: "bg-yellow",
        date: new Date(),
        isEdit: false,
      },
      {
        id: 3,
        title: "test",
        description:
          "A tes is the place where the group revises, updates, and adds to what it knows as a group. Every group creates its own pool of shared knowledge, experience, judgment, and folklore. But the pool consists only of what the individuals have experienced or discussed as a group.",
        background: "bg-yellow",
        date: new Date(),
        isEdit: false,
      },
    ],
    editNote: "",
    background: "bg-yellow",
  };

  editNote = (id: string) => {
    const { notes, editNote } = this.state;
    let index = notes.findIndex((note: any) => note.id === id);
    notes[index].isEdit = true;
    this.setState({
      notes,
      editNote: notes[index].description,
    });
  };

  updateNote = (id: string) => {
    const { notes, editNote, background } = this.state;
    let index = notes.findIndex((note: any) => note.id === id);
    notes[index].description = editNote;
    notes[index].background = background;
    notes[index].isEdit = false;
    this.setState({
      notes,
      editNote: "",
    });
  };
  texteraOnchnage = (event: FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    let newState = { [name]: value } as Pick<IState, any>;
    this.setState(newState);
  };
  deleteNote = (id: string) => {
    const { notes } = this.state;
    notes.splice(
      notes.findIndex((x: any) => x.id === id),
      1
    );
    this.setState({ notes });
  };
  render() {
    const { notes, editNote, background } = this.state;
    return (
      <div className="col note d-flex flex-column">
        <div className="w-100 d-flex justify-content-end">
          <button className="col-2 py-2 mx-5 btn-grad border-0">
            New Note
          </button>
        </div>
        <div className="w-100 d-flex mt-2 justify-content-start flex-wrap">
          {notes.map((note: any) => (
            <div
              key={note.id}
              className={`col-3 note-item mx-2 my-3 p-3 d-flex flex-column ${note.background}`}
            >
              <div className="d-flex justify-content-between note-title pb-2">
                <div>
                  <span>{note.title}</span>
                </div>
                <div>
                  <button
                    className="note-btn btn-delete mx-1"
                    onClick={() => this.deleteNote(note.id)}
                  >
                    Del
                  </button>
                  <Conditional checkRender={!note.isEdit}>
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
                      Add
                    </button>
                  </Conditional>
                </div>
              </div>
              <div className="note-description">
                <Conditional checkRender={!note.isEdit}>
                  {note.description}
                </Conditional>
                <Conditional checkRender={note.isEdit}>
                  <textarea
                    name="editNote"
                    onChange={(e: any) => this.texteraOnchnage(e)}
                    className="col-12 border-0 p-2"
                    rows={10}
                    value={editNote}
                  />
                </Conditional>
              </div>
              <div className="text-muted py-2 note-date">
                Created on {note.date.toUTCString()}
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
