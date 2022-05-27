import React, { useState, useEffect } from "react";
import MenuItems from "@/components/UI/Sidebar/MenuItems";
import SubMenuItems from "@/components/UI/Sidebar/SubMenuItems";
import { useRouter } from "next/router";

function Menu() {
  const router = useRouter();

  const [pathName, setPathName] = useState("Dashboard");

  const pathMenu = () => {
    setPathName(router.pathname);
  };

  useEffect(() => {
    pathMenu();
  }, []);

  return (
    <div className="flex w-full h-full">
      <div className="w-24 bg-primaryDarkBlue-400 text-white">
        <div className="w-24 h-16 flex justify-center items-center">
          <div className="h-8 w-8 bg-blue-100"></div>
        </div>
        <MenuItems
          desktopMode={true}
          pathMenu={pathMenu}
          setTitle={setPathName}
        />
      </div>
      <div className="w-full">
        <div className="w-full border-b shadow-lg pl-4 h-16 flex justify-left items-center">
          <div className="h-8 w-24 bg-blue-100"></div>
        </div>
        <div className="mx-4">
          <SubMenuItems pathName={pathName} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
