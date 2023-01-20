import React, { useState } from "react";
import SideNavBar from "../components/SideNavBar";
import AddEntry from "../components/AddEntry";
import CreateGroupModal from "../components/CreateGroupModal";
import CreateTaskModal from "../components/CreateTaskModal";
import AddTaskModal from "../components/AddTaskModal";
import UpdateModal from "../components/UpdateModal";
import TaskHeader from "../components/TaskHeader";
import TaskTable from "../components/TaskTable";
import TLTree from "../components/TLTree";
import { Input, Col, Row } from "antd";
import "antd/dist/antd.min.css";
import "../App.css";

export function TaskListPage() {
  const [groups, setGroups] = useState({
    title: "",
    key: "0-0",
    children: [{ title: "", key: "" }],
    selectable: false,
  });
  const [taskTableData, setTaskTableData] = useState([
    {
      key: "1",
      taskName: "BOLA Data Update Settings",
      sTime: "2022-08-26 11:22:00",
      eTime: "2022-09-22 12:22:00",
      state: "finish",
    },
    {
      key: "2",
      taskName: "BOLA Data Update Settings",
      sTime: "2022-08-26 11:22:00",
      eTime: "2022-09-22 12:22:00",
      state: "finish",
    },
    {
      key: "3",
      taskName: "BOLA Data Update Settings",
      sTime: "2022-08-26 11:22:00",
      eTime: "2022-09-22 12:22:00",
      state: "finish",
    },
    {
      key: "4",
      taskName: "BOLA Data Update Settings",
      sTime: "2022-08-26 11:22:00",
      eTime: "2022-09-22 12:22:00",
      state: "finish",
    },
    {
      key: "5",
      taskName: "BOLA Data Update Settings",
      sTime: "2022-08-26 11:22:00",
      eTime: "2022-09-22 12:22:00",
      state: "finish",
    },
    {
      key: "6",
      taskName: "BOLA Data Update Settings",
      sTime: "2022-08-26 11:22:00",
      eTime: "2022-09-22 12:22:00",
      state: "finish",
    },
    {
      key: "7",
      taskName: "BOLA Data Update Settings",
      sTime: "2022-08-26 11:22:00",
      eTime: "2022-09-22 12:22:00",
      state: "finish",
    },
    {
      key: "8",
      taskName: "BOLA Data Update Settings",
      sTime: "2022-08-26 11:22:00",
      eTime: "2022-09-22 12:22:00",
      state: "finish",
    },
    {
      key: "9",
      taskName: "BOLA Data Update Settings",
      sTime: "2022-08-26 11:22:00",
      eTime: "2022-09-22 12:22:00",
      state: "finish",
    },
  ]);
  const [updateTableData, setUpdateTableData] = useState([]);
  const [toggleCreateGroupModal, setToggleCreateGroupModal] = useState(false);
  const [toggleAddTaskModal, setToggleAddTaskModal] = useState(false);
  const [toggleTaskModal, setToggleTaskModal] = useState(false);
  const [toggleUpdateModal, setToggleUpdateModal] = useState(false);
  const [toggleTLSection, setToggleTLSection] = useState(false);
  const [toggleTLTree, setToggleTLTree] = useState(false);
  const [headerName, setHeaderName] = useState("");

  console.log("UTD!!", updateTableData);

  function showGroupModal(bool) {
    setToggleCreateGroupModal(bool);
  }
  function exitGroupModal() {
    setToggleCreateGroupModal(false);
  }
  function showTaskModal() {
    setToggleTaskModal(true);
  }
  function exitTaskModal() {
    setToggleTaskModal(false);
  }
  function showTaskHeader(bool) {
    setToggleTLSection(bool);
  }
  function showUpdateModal() {
    setToggleUpdateModal(true);
  }
  function exitUpdateModal() {
    setToggleUpdateModal(false);
  }
  function showAddTaskModal() {
    setToggleAddTaskModal(true);
  }
  function exitAddTaskModal() {
    setToggleAddTaskModal(false);
  }

  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const deleteEntry = (taskNameID) => {
    setUpdateTableData((prevTableData) => {
      return prevTableData.filter((row) => row.key !== taskNameID);
    });
  };

  // console.log(groups);

  return (
    <div>
      <CreateGroupModal
        openGroupModal={toggleCreateGroupModal}
        exitGroupModal={exitGroupModal}
        onSetGroups={setGroups}
        onShowTLTree={setToggleTLTree}
      />
      <CreateTaskModal
        openTaskModal={toggleTaskModal}
        exitTaskModal={exitTaskModal}
        onSetGroups={setGroups}
        onSetTaskHeaderName={setHeaderName}
      />
      <UpdateModal
        openUpdateModal={toggleUpdateModal}
        exitUpdateModal={exitUpdateModal}
        updateHeaderName={headerName}
        onShowAddTaskModal={showAddTaskModal}
        updateTableData={updateTableData}
        onSetTaskTableData={setTaskTableData}
      />
      <AddTaskModal
        openAddTaskModal={toggleAddTaskModal}
        exitAddTaskModal={exitAddTaskModal}
        setUpdateTableData={setUpdateTableData}
        onShowAddTaskModal={showAddTaskModal}
        onDeleteEntry={deleteEntry}
      />
      <Row className="App">
        <Col flex="4%">
          <SideNavBar />
        </Col>
        <Col flex="30%" className="DataSourceSection">
          <div className="DataList">
            <AddEntry
              title="Task List"
              toggleCreateGroupModal={showGroupModal}
              taskPageOnly={true}
            />
            <Search
              allowClear
              onSearch={onSearch}
              style={{
                marginLeft: "6.5%",
                marginBottom: "5%",
                width: "86.5%",
              }}
            />
            {toggleTLTree && (
              <TLTree
                groupsData={[groups]}
                onShowTaskModal={showTaskModal}
                onShowTaskHeader={showTaskHeader}
                onExitTaskHeader={showTaskHeader}
              />
            )}
          </div>
        </Col>
        <Col flex="auto">
          <div className="NewDataSourceSection">
            <div
              style={{ padding: "2%", paddingTop: "2.8%" }}
              className="NewDataSourceFormArea"
            >
              {toggleTLSection && (
                <TaskHeader
                  headerTitleName={headerName}
                  onShowUpdateModal={showUpdateModal}
                />
              )}
              {toggleTLSection && <TaskTable data={taskTableData}/>}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
