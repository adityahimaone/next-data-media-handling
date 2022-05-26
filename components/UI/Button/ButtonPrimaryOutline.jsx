import React from "react";
import classNames from "classnames";

function ButtonPrimaryOutline({ children, className, onClick, ...props }) {
  const cx = classNames(["button-primary-outline", className]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}

export default ButtonPrimaryOutline;
