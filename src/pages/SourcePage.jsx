import React, { useState } from "react";
import SideNavBar from "../components/SideNavBar";
import AddEntry from "../components/AddEntry";
import DSForm from "../components/DSForm";
import DSTree from "../components/DSTree";
import "antd/dist/antd.min.css";
import "../App.css";
import { Alert, Input, Col, Row } from "antd";
const { Search } = Input;
var index;
var currentKey = "";

export function SourcePage() {
  const [sources, setSources] = useState({
    title: "📁 API",
    key: "0-0",
    children: [],
    selectable: false,
  });
  const [rawSources, setRawSources] = useState([]);
  const [toggleDSTree, setToggleDSTree] = useState(false);
  const [toggleDataForm, setToggleDataForm] = useState(false);
  const [toggleSrcInfoForm, setToggleSrcInfoForm] = useState(false);
  const [toggleSaveSuccessAlert, setToggleSaveAlert] = useState(false);
  const [toggleSaveCheckAlert, setToggleSaveCheckAlert] = useState(false);

  const onSearch = (value) => console.log(value);
  function handleToggle(bool) {
    setToggleDataForm(bool);
  }
  function handleCloseSaveAlert() {
    setToggleSaveAlert(false);
  }
  function handleOpenCheckAlert() {
    setToggleSaveCheckAlert(true);
  }
  function handleCloseCheckAlert() {
    setToggleSaveCheckAlert(false);
  }
  function handleShowSrcInfoForm(bool) {
    setToggleSrcInfoForm(bool);
  }

  // console.log("SOURCES", sources);
  // console.log("RAWSOURCES:", rawSources);

  function addSource(src) {
    setRawSources((prevRawSource) => {
      return [...prevRawSource, src];
    });
    if (src.Type === "api") {
      var newNode = { title: src.Name, key: src.Name };
      setSources((prevSource) => {
        return { ...prevSource, children: [...prevSource.children, newNode] };
      });
    }
    setToggleDSTree(true);
    setToggleSaveAlert(true);
    setToggleDataForm(false);
  }

  function displaySource(source_name) {
    index = 0;
    if (currentKey.length === 0) {
      currentKey = source_name;
      return;
    } else if (currentKey !== source_name) {
      // Must close source name before opening another one || Solution: useEffect?
      // handleShowSrcInfoForm(false);
      for (var i = 0; i < rawSources.length; i++) {
        console.log(
          "RAWSOURCES[i]NAME: ",
          rawSources[i].Name,
          "SOURCE_NAME: ",
          source_name
        );
        if (rawSources[i].Name === source_name) {
          currentKey = source_name;
          return;
        } else {
          index++;
        }
      }
    }
  }

  return (
    <div>
      <div className="antAlert">
        {toggleSaveCheckAlert && (
          <Alert
            message="Check Success!"
            type="success"
            closable
            showIcon
            onClose={handleCloseCheckAlert}
          />
        )}
      </div>
      <div className="antAlert">
        {toggleSaveSuccessAlert && (
          <Alert
            message="Save Succeed!"
            type="success"
            closable
            showIcon
            onClose={handleCloseSaveAlert}
          />
        )}
      </div>
      <Row className="App">
        <Col flex="4%">
          <SideNavBar />
        </Col>
        <Col flex="30%" className="DataSourceSection">
          <div className="DataList">
            <AddEntry
              title="Data Source"
              toggleCreateDataForm={handleToggle}
              sourcePageOnly={true}
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
            {toggleDSTree && (
              <DSTree
                sourcesData={[sources]}
                onShowSrcInfoForm={handleShowSrcInfoForm}
                onDisplayData={displaySource}
              />
            )}
          </div>
        </Col>
        <Col flex="auto">
          <div className="NewDataSourceSection">
            <div className="NewDataSourceFormArea">
              {toggleDataForm && (
                <DSForm
                  toggleCreateDataForm={handleToggle}
                  onAddSource={addSource}
                  toggleCheckAlert={handleOpenCheckAlert}
                  saveTrueEditFalse={true}
                  newTrueInfoFalse={true}
                  noPopupConfirm={true}
                />
              )}
              {toggleSrcInfoForm && (
                <DSForm
                  toggleCreateDataForm={handleToggle}
                  onAddSource={addSource}
                  toggleCheckAlert={handleOpenCheckAlert}
                  saveTrueEditFalse={false}
                  newTrueInfoFalse={false}
                  initialValues={{
                    Name: rawSources[index].Name,
                    Description: rawSources[index].Description,
                    Type: rawSources[index].Type,
                    Notes: rawSources[index].Notes,
                    URL: rawSources[index].URL,
                    Password: rawSources[index].Password,
                    Username: rawSources[index].Username,
                  }}
                  infoExpansion={true}
                  infoDisable={true}
                  noPopupConfirm={false}
                />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
