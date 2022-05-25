import React from "react";
import Navbar from "@/components/UI/Header/Navbar";

function Userlayout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

export default Userlayout;
