import React, { useState, useEffect } from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BiHomeAlt } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { useRouter } from "next/router";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

function MenuItems({ desktopMode, pathMenu, setTitle }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = [
    {
      text: "Dashboard",
      path: "/admin/dashboard",
      icon: <BiHomeAlt className="h-8 w-8" />,
    },
    {
      text: "Cars",
      path: "/admin/cars/listcars",
      icon: <BsTruck className="h-8 w-8" />,
    },
  ];

  // console.log(pathMenu);

  const menuHandler = (path, name) => {
    router.push(path);
    setTitle(name);
    // pathMenu(name);
  };

  useEffect(() => {
    // if (pathMenu !== undefined) {
    //   setTitle(pathMenu);
    // }
  }, []);

  const active = (
    <span
      className="absolute inset-y-0 left-0 w-1 bg-blue-300 rounded-tr-lg rounded-br-lg"
      aria-hidden="true"
    ></span>
  );

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          disablePadding={true}
          key={item.text}
          onClick={() =>
            menuHandler(item.path, item.text) && setTitle(item.text)
          }
        >
          {router.pathname === item.path ? active : null}
          <div
            className={`flex p-2 w-full items-center overflow-clip ${
              desktopMode ? "flex-col justify-center" : "flex-row space-x-2"
            }`}
          >
            <div>{item.icon}</div>
            <div>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        </ListItem>
      ))}
    </List>
  );
}

export default MenuItems;
