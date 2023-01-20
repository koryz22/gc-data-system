import { Tree } from "antd";
import React from "react";

function DSTree(props) {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
    if(selectedKeys[0] !== "0-0" && selectedKeys.length !== 0){
      props.onShowSrcInfoForm(true);
      props.onDisplayData(selectedKeys[0]);
    }
    else if(selectedKeys.length === 0){
      props.onShowSrcInfoForm(false);
    }
  };

  const onLoad = () => {
    console.log("loaded");
  };

  return (
    <Tree
      style={{marginLeft: "4%"}}
      defaultExpandedKeys={["0-0"]}
      onSelect={onSelect}
      onLoad={onLoad}
      treeData={props.sourcesData}
    />
    
  );
}

export default DSTree;
