import React from "react";
import SideNavBar from "../components/SideNavBar";
import "antd/dist/antd.min.css";
import "../App.css";
import { Row, Col } from "antd";
// import { useNavigate } from "react-router-dom";

export function HomePage() {
  // const navigate = useNavigate();
  // const sendData = () => {
  //   navigate("/taskList", {state:{title:"hello"}})
  // }
  return (
    <div>
      <Row className="App">
        <Col flex="4%">
          <SideNavBar />
        </Col>
        <Col flex="30%" className="DataSourceSection">
          <div className="DataList">
            <div className="AddEntry">
              <h1 id="AddEntryTitle">Welcome!</h1>
              <hr className="solid"></hr>
              {/* <button onClick={()=>{sendData()}}>Component B</button> */}
            </div>
          </div>
        </Col>
        <Col flex="auto">
          <div className="NewDataSourceSection">
            <div className="NewDataSourceFormArea"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
