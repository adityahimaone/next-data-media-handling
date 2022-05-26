import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { BiChevronRight } from "react-icons/bi";

const handleClick = (event) => {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
};

function Breadcumb() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/dashboard"
      onClick={handleClick}
      className="text-gray-900 font-semibold hover:text-gray-700"
    >
      Dashboard
    </Link>,
    <p key="2" className=" text-gray-500">
      Dashboard
    </p>,
  ];
  return (
    <Breadcrumbs
      separator={<BiChevronRight className="w-6 h-6" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}

export default Breadcumb;
