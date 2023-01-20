import React from "react";
import { Table } from "antd";
import "../App.css";

function UpdateTable(props) {
  const columns = [
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
      width: "25%",
    },
    {
      title: "Execution Frequency",
      dataIndex: "executionFrequency",
      key: "executionFrequency",
      width: "25%",
    },
    {
      title: "Execution State",
      dataIndex: "executionState",
      key: "executionState",
      width: "25%",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      key: "operation",
      width: "25%",
    },
  ];

  return (
    <Table
      size="small"
      pagination={{ hideOnSinglePage: true }}
      columns={columns}
      dataSource={props.updateTableData}
      style={{ marginTop: "5%" }}
    />
  );
}

export default UpdateTable;
