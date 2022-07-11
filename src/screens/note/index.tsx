import React, { Component } from "react";

type MyProps = {
  // using `interface` is also ok
  message?: string;
};
type MyState = {
  count: number; // like this
};
class Note extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 0,
  };
  render() {
    return <div>Notes</div>;
  }
}

export default Note;
