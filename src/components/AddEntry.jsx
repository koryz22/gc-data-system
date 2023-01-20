import React from "react";
import { Button } from "antd";
import "../App.css";

function AddEntry(props) {
  return (
    <div className="AddEntry">
      <h1 id="AddEntryTitle">{props.title}</h1>
      <Button
        size="large"
        type="text"
        id="AddEntryButton"
        onClick={() => {
          props.sourcePageOnly && props.toggleCreateDataForm(true);
          props.taskPageOnly && props.toggleCreateGroupModal(true);
        }}
      >
        +
      </Button>
      <hr className="solid"></hr>
    </div>
  );
}

export default AddEntry;
