import React from "react";
import { Table } from "antd";
import "../App.css";

function TaskTable(props) {
  const columns = [
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
      width: "25%",
    },
    {
      title: "Start Time",
      dataIndex: "sTime",
      key: "sTime",
      width: "25%",
    },
    {
      title: "End Time",
      dataIndex: "eTime",
      key: "eTime",
      width: "25%",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      width: "25%",
      className: "greenColor",
      render(text) {
        return {
          props: {
            style: { color: text === "Waiting For Execution" && "rgba(42, 130, 228, 1)"}
          },
          children: <>{text}</>
        };
      }
    },
  ];

  return (
    <Table
      size="small"
      pagination={{ hideOnSinglePage: true }}
      columns={columns}
      dataSource={props.data}
      style={{ marginTop: "5%" }}
    />
  );
}

export default TaskTable;
