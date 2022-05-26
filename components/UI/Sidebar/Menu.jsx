import React, { useState } from "react";
import MenuItems from "@/components/UI/Sidebar/MenuItems";
import SubMenuItems from "@/components/UI/Sidebar/SubMenuItems";

function Menu() {
  const [pathName, setPathName] = useState("Dashboard");
  const namemenu = "";

  const pathMenu = (path) => {
    console.log(path);
    // namemenu = path;s
    // return setPathName(path);
    return path;
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-24 bg-primaryDarkBlue-400 text-white">
        <div className="w-24 h-16 flex justify-center items-center">
          <div className="h-8 w-8 bg-blue-100"></div>
        </div>
        <MenuItems desktopMode={true} pathMenu={pathMenu} />
      </div>
      <div className="w-full">
        <div className="w-full border-b shadow-lg pl-4 h-16 flex justify-left items-center">
          <div className="h-8 w-24 bg-blue-100"></div>
        </div>
        <div className="mx-4">
          <SubMenuItems pathName={pathMenu} namemenu={namemenu} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
