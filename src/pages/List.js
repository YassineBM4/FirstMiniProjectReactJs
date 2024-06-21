import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/ListItems";
import "../styles/List.css";

function List() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our anime list</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              episodes={menuItem.episodes}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
