import { Tree, Button, Menu, Dropdown } from "antd";
import React from "react";

function TLTree(props) {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Create subgroup",
        },
        {
          key: "2",
          label: "Create task",
          children: [
            {
              key: "2-1",
              label: "Database task",
            },
            {
              key: "2-2",
              label: "SQL task",
            },
            {
              key: "2-3",
              label: "Excel task",
            },
            {
              key: "2-4",
              label: "API task",
              onClick: () => {
                props.onShowTaskModal();
              },
            },
          ],
        },
      ]}
    />
  );

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
    if (selectedKeys.length === 0) {
      props.onExitTaskHeader(false);
    } else {
      props.onShowTaskHeader(true);
    }
  };

  return (
    <div style={{ height: "250px" }}>
      <Tree
        style={{ marginLeft: "4%", float: "left" }}
        defaultExpandedKeys={["0-0"]}
        onSelect={onSelect}
        treeData={props.groupsData}
      />
      <Dropdown trigger="click" overlay={menu}>
        <Button type="text" id="CreateTaskButton">
          +
        </Button>
      </Dropdown>
      <Button type="text" id="DotsButton">
        ...
      </Button>
    </div>
  );
}

export default TLTree;
