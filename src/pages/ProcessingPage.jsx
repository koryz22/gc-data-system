import React from "react";
import SideNavBar from "../components/SideNavBar";
import "antd/dist/antd.min.css";
import "../App.css";
import { Row, Col } from "antd";

export function ProcessingPage() {
  return (
    <Row className="App">
      <Col flex="4%">
        <SideNavBar />
      </Col>
      <Col flex="30%" className="DataSourceSection">
        <div className="DataList">
          <div className="AddEntry">
            <h1 id="AddEntryTitle">Processing Page</h1>
            <hr className="solid"></hr>
          </div>
        </div>
      </Col>
      <Col flex="auto">
        <div className="NewDataSourceSection">
          <div className="NewDataSourceFormArea"></div>
        </div>
      </Col>
    </Row>
  );
}
