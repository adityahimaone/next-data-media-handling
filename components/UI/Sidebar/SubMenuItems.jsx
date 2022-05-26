import React from "react";

function SubMenuItems({ pathName, namemenu }) {
  const SubDashboard = {
    title: "Dashboard",
    submenu: [
      {
        name: "Dashboard",
        path: "/admin/dashboard",
      },
    ],
  };

  const SubCars = {
    title: "Cars",
    submenu: [
      {
        name: "List Cars",
        path: "/admin/cars/listcars",
      },
    ],
  };

  return (
    <>
      <h1 className="text-lg font-semibold my-4">
        {pathName === "Dashboard" ? "Dashboard" : "Dashboard"}
      </h1>
      <h2 className="text-md">Dashboard</h2>
    </>
  );
}

export default SubMenuItems;
