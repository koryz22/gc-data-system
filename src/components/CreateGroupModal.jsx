import React from "react";
import { Modal, Button, Form, Input } from "antd";

function CreateGroupModal(props) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success: ", values);
    props.onSetGroups((prevGroup) => {
        return {...prevGroup, title: "📁 " + values.Name}
    })
    props.onShowTLTree(true);
    props.exitGroupModal();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Create Group"
      open={props.openGroupModal}
      onOk={props.exitGroupModal}
      onCancel={props.exitGroupModal}
      okText="Confirm"
      footer={[
        <Button key="back" onClick={props.exitGroupModal}>
          Cancel
        </Button>,
        <Button
          key="confirm"
          form="nameForm"
          type="primary"
          htmlType="s"
        >
          Confirm
        </Button>,
      ]}
    >
      <Form
        name="basicCreateGroup"
        form={form}
        id="nameForm"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 19 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: "Please input group name!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CreateGroupModal;
