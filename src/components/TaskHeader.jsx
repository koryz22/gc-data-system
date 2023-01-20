import React from "react";
import { Button } from "antd";

function TaskHeader(props) {
  return (
    <div>
      <h1 id="TaskHeaderName">{props.headerTitleName}</h1>
      <hr className="taskHR"></hr>
      <h1 id="TaskHeader">Task Execution List</h1>
      <Button
        type="default"
        style={{ float: "left", fontSize: "10px" }}
        size="small"
        onClick={() => {
          props.onShowUpdateModal();
        }}
      >
        ⚙️ Update Settings
      </Button>
      <Button
        type="default"
        style={{ float: "left", marginLeft: "3%", fontSize: "10px" }}
        size="small"
        onClick={() => {
          console.log("refresh clicked");
        }}
      >
        🔄 Refresh
      </Button>
    </div>
  );
}

export default TaskHeader;
