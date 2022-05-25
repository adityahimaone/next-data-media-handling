import React from "react";

function ButtonSecondary({ children, className, onClick, ...props }) {
  const cx = classNames(["button-secondary-green", className]);
  return (
    <button onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}

export default ButtonSecondary;
