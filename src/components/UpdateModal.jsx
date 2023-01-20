import React from "react";
import UpdateTable from "./UpdateTable";
import { Modal, Button, message } from "antd";

function UpdateModal(props) {
  function closeUpdateModal() {
    props.exitUpdateModal();
    props.onSetTaskTableData((prevData) => {
      const newTaskDataEntry = {
        key: props.updateTableData[0].taskName,
        taskName: props.updateTableData[0].taskName,
        sTime: "2022-08-27 00:00:00",
        eTime: "-",
        state: "Waiting For Execution",
      };
      return [newTaskDataEntry, ...prevData];
    });
  }

  return (
    <Modal
      title={props.updateHeaderName + " - Update Settings"}
      open={props.openUpdateModal}
      onOk={closeUpdateModal}
      onCancel={props.exitUpdateModal}
      width="50%"
    >
      <Button
        type="default"
        size="small"
        onClick={() => {
          if (props.updateTableData.length >= 1) {
            message.warning("Edit, delete, or confirm task!")
          } else {
            props.onShowAddTaskModal();
          }
        }}
      >
        + Add Task
      </Button>
      <UpdateTable updateTableData={props.updateTableData} />
    </Modal>
  );
}

export default UpdateModal;
