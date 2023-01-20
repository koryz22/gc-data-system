import React from "react";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import HouseSidingOutlinedIcon from "@mui/icons-material/HouseSidingOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import StorageIcon from "@mui/icons-material/Storage";

export const SideBarNavData = [
  {
    icon: <BallotOutlinedIcon fontSize="large" />,
    link: "/taskList",
  },
  {
    icon: <BuildOutlinedIcon fontSize="large" />,
    link: "/processing",
  },
  {
    icon: <HouseSidingOutlinedIcon fontSize="large" />,
    link: "/warehouse",
  },
  {
    icon: <StorageIcon fontSize="large" />,
    link: "/dataSource",
  },
];
