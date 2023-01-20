import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  Popconfirm,
  message,
} from "antd";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const { Option } = Select;

function DSForm(props) {
  const [toggleRestOfForm, setToggleRestOfForm] = useState(false);
  const [popconfirmOpen, setPopconfirmOpen] = useState(false);
  const [disableSaveButton, setDisableSaveButton] = useState(true);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success: ", values);
    props.onAddSource(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      setDisableSaveButton(false);
      props.toggleCheckAlert();
      console.log("Success (check):", values);
    } catch (errorInfo) {
      console.log("Failed (check):", errorInfo);
    }
  };

  const onDropdownChange = (value) => {
    switch (value) {
      case "api":
        form.setFieldsValue({ note: "Hi, API!" });
        console.log("SETFIELDSVALUE: API");
        setToggleRestOfForm(true);
        return;
      // case "mySQL":form.setFieldsValue({ note: "Hi, MySQL!" });return;
      // case "apacheHive":form.setFieldsValue({ note: "Hi, ApacheHive!" });return;
      // case "oracle":form.setFieldsValue({ note: "Hi, Oracle!" });return;
      // case "sqlServer":form.setFieldsValue({ note: "Hi, SQLServer!" });return;
      default:
        console.log("logged: default case");
    }
  };

  const openPopup = () => {
    setPopconfirmOpen(true);
  };

  const confirm = () => {
    form.resetFields();
    props.toggleCreateDataForm(false);
  };

  const cancel = () => {
    setPopconfirmOpen(false);
  };

  return (
    <div className="DSForm">
      <Row>
        <Col>
          {props.noPopupConfirm && (
            <Popconfirm
              title="You have not saved the information you entered. Are you sure you want to exit?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Confirm"
              open={popconfirmOpen}
              style={{ width: "200px" }}
            >
              <Button type="text" onClick={openPopup}>
                <ArrowBackIcon></ArrowBackIcon>
              </Button>
            </Popconfirm>
          )}
          &nbsp;&nbsp;&nbsp;
        </Col>
        <Col>
          <h1 style={{ fontSize: "18px", marginTop: "5px" }}>
            <b>
              {props.newTrueInfoFalse
                ? "New Data Source"
                : "Data Source Information"}
            </b>
          </h1>
        </Col>
      </Row>
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={props.initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: "Please input API name!" }]}
        >
          <Input disabled={props.infoDisable} />
        </Form.Item>
        <Form.Item label="Description" name="Description">
          <Input disabled={props.infoDisable} />
        </Form.Item>
        <Form.Item label="Type" name="Type" rules={[{ required: true }]}>
          <Select
            placeholder="Select a data source type"
            onChange={onDropdownChange}
            disabled={props.infoDisable}
          >
            <Option value="mySQL">MySQL</Option>
            <Option value="apacheHive">Apache Hive</Option>
            <Option value="api">API</Option>
            <Option value="oracle">Oracle</Option>
            <Option value="sqlServer">SQL Server</Option>
          </Select>
        </Form.Item>
        {(toggleRestOfForm || props.infoExpansion) && (
          <Form.Item
            label="URL"
            name="URL"
            rules={[{ required: true, message: "Please provide a URL!" }]}
          >
            <Input disabled={props.infoDisable} />
          </Form.Item>
        )}
        {(toggleRestOfForm || props.infoExpansion) && (
          <Form.Item
            label="Username"
            name="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input disabled={props.infoDisable} />
          </Form.Item>
        )}
        {(toggleRestOfForm || props.infoExpansion) && (
          <Form.Item
            label="Password"
            name="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input disabled={props.infoDisable} />
          </Form.Item>
        )}
        {(toggleRestOfForm || props.infoExpansion) && (
          <Form.Item
            label="Notes"
            name="Notes"
            rules={[{ required: true, message: "Please leave some notes!" }]}
          >
            <Input disabled={props.infoDisable} />
          </Form.Item>
        )}
        {(toggleRestOfForm || props.infoExpansion) && (
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button
              type="default"
              onClick={onCheck}
              style={{ fontSize: "12px" }}
            >
              Check
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {props.saveTrueEditFalse ? (
              <Button
                disabled={disableSaveButton}
                type="primary"
                htmlType="s"
                style={{ fontSize: "12px" }}
              >
                Save
              </Button>
            ) : (
              <Button
                type="primary"
                style={{ fontSize: "12px" }}
                onClick={() => message.info("Edit Feature TBD")}
              >
                Edit
              </Button>
            )}
          </Form.Item>
        )}
      </Form>
    </div>
  );
}

export default DSForm;
