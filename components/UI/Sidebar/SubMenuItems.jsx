import React from "react";

function SubMenuItems({ pathName }) {
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
        path: "/admin/cars",
      },
    ],
  };

  return (
    <>
      <h1 className="text-lg font-semibold my-4">
        {pathName === "/admin" ? SubDashboard.title : SubCars.title}
      </h1>
      <h2 className="text-md">
        <ul>
          {pathName === "/admin"
            ? SubDashboard.submenu.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))
            : SubCars.submenu.map((item, index) => (
                <li key={index}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
        </ul>
      </h2>
    </>
  );
}

export default SubMenuItems;
