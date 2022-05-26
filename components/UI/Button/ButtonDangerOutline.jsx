import React from "react";
import classNames from "classnames";

function ButtonDangerOutline({ children, className, onClick, ...props }) {
  const cx = classNames(["button-danger-outline", className]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}

export default ButtonDangerOutline;
