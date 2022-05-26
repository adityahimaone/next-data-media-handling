import React from "react";

function Card({ children }) {
  return (
    <div className=" bg-white rounded-md shadow-md p-6 hover:scale-105">
      {children}
    </div>
  );
}

export default Card;
