import React from "react";
import Navbar from "@/components/UI/Header/Navbar";
import Footer from "@/components/UI/Footer.jsx/Footer";

function Userlayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}

export default Userlayout;
