import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, DatePicker } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function AddTaskModal(props) {
  const [form] = Form.useForm();
  const [showRestAddTaskForm, setShowRestAddTaskForm] = useState(false);
  const { Option } = Select;

  const onFinish = (values) => {
    console.log("Success!: ", values);
    const newData = {
      key: values.taskName,
      taskName: values.taskName,
      executionFrequency: values.executionFrequency,
      executionState: "Waiting for Execution",
      operation: (
        <>
          <EditOutlined
            onClick={() => {
              props.onShowAddTaskModal();
            }}
            style={{ color: "rgba(42, 130, 228, 0.65)" }}
          />
          <DeleteOutlined
            onClick={() => {
              props.onDeleteEntry(values.taskName);
              console.log("clicked");
            }}
            style={{ color: "rgba(212, 48, 48, 1)", marginLeft: "8%" }}
          />
        </>
      ),
    };
    props.setUpdateTableData([newData]);
    props.exitAddTaskModal();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleSelectChange(value) {
    console.log("Selected:", value);
    if (value === "Simple Repetition") {
      setShowRestAddTaskForm(true);
    } else if (value === "Immediate Execution") {
      setShowRestAddTaskForm(false);
    }
  }

  return (
    <Modal
      title="Add Task"
      open={props.openAddTaskModal}
      onOk={props.exitAddTaskModal}
      onCancel={props.exitAddTaskModal}
      okText="Confirm"
      width="45%"
      footer={[
        <Button key="back" onClick={props.exitAddTaskModal}>
          Cancel
        </Button>,
        <Button key="confirm" form="addTaskForm" type="primary" htmlType="s">
          Confirm
        </Button>,
      ]}
    >
      <Form
        name="basicAddTaskModal"
        form={form}
        id="addTaskForm"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 14 }}
        labelAlign="right"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Task Name"
          name="taskName"
          rules={[{ required: true, message: "Please input task name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Update Mode"
          name="updateMode"
          rules={[{ required: true, message: "Please choose update mode!" }]}
        >
          <Select onChange={handleSelectChange}>
            <Option value="Full Update">Full Update</Option>
            <Option value="Delta Update">Delta Update</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Execution Frequency"
          name="executionFrequency"
          rules={[
            { required: true, message: "Please choose execution frequency!" },
          ]}
        >
          <Select onChange={handleSelectChange}>
            <Option value="Immediate Execution">Immediate Execution</Option>
            <Option value="Simple Repetition">Simple Repetition</Option>
          </Select>
        </Form.Item>
        {showRestAddTaskForm && (
          <Form.Item
            label="every"
            name="every"
            style={{ width: "35%", marginLeft: "26%", float: "left" }}
            colon={false}
          >
            <Input style={{ zIndex: "1" }} />
          </Form.Item>
        )}
        {showRestAddTaskForm && (
          <Form.Item
            name="cycleType"
            style={{ position: "relative", right: "2%" }}
          >
            <Select onChange={handleSelectChange} style={{ width: "95%" }}>
              <Option value="minutes">minute(s)</Option>
              <Option value="hours">hour(s)</Option>
              <Option value="days">day(s)</Option>
            </Select>
          </Form.Item>
        )}
        {showRestAddTaskForm && (
          <Form.Item
            name="startTime"
            label="Start Time"
            rules={[
              {
                type: "object",
                required: true,
                message: "Please select start time!",
              },
            ]}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="" />
          </Form.Item>
        )}
        {showRestAddTaskForm && (
          <Form.Item
            name="endTime"
            label="End Time"
            rules={[
              {
                required: true,
                message: "Please select start time!",
              },
            ]}
          >
            <Select onChange={handleSelectChange} style={{ width: "58.8%" }}>
              <Option value="Unlimited">Unlimited</Option>
              <Option value="Set Time">Set Time</Option>
            </Select>
          </Form.Item>
        )}
      </Form>
    </Modal>
  );
}

export default AddTaskModal;
