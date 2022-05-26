import React from "react";
import classNames from "classnames";

function ButtonSuccess({ children, className, onClick, ...props }) {
  const cx = classNames(["button-success", className]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}

export default ButtonSuccess;
