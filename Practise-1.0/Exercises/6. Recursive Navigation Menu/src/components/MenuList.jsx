import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list.map((listItem, index) => (
        <MenuItem key={index} item={listItem} />
      ))}
    </ul>
  );
};

export default MenuList;
