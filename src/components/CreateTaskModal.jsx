import React from "react";
import { Modal, Button, Form, Input, Select } from "antd";

function CreateTaskModal(props) {
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = (values) => {
    console.log("Success: ", values);
    props.onSetGroups((prevGroup) => {
      var newChildNode = { title: "📝 " + values.Name, key: values.Name };
      return { ...prevGroup, children: [newChildNode] };
    });
    props.onSetTaskHeaderName(values.Name);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleSelectChange(value) {
    console.log("Selected:", value);
  }

  return (
    <Modal
      title="Create Task"
      open={props.openTaskModal}
      onOk={props.exitTaskModal}
      onCancel={props.exitTaskModal}
      okText="Confirm"
      footer={[
        <Button key="back" onClick={props.exitTaskModal}>
          Cancel
        </Button>,
        <Button
          key="confirm"
          form="taskForm"
          type="primary"
          htmlType="s"
          onClick={props.exitTaskModal}
        >
          Confirm
        </Button>,
      ]}
    >
      <Form
        name="basicCreateTask"
        form={form}
        id="taskForm"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        labelAlign="left"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Name" style={{ lineHeight: "18px" }}>
          <br />
          <br />
          <Form.Item name="Name">
            <Input
              style={{
                marginLeft: "-26%",
                width: 470,
              }}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Data Source" style={{ lineHeight: "18px" }}>
          <br />
          <br />
          <Form.Item name="Data Source">
            <Select
              style={{
                marginLeft: "-26%",
                width: 470,
              }}
              onChange={handleSelectChange}
            >
              <Option value="Mock API">Mock API</Option>
            </Select>
          </Form.Item>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateTaskModal;
