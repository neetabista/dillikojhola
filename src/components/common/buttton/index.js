import React from "react";

const Button = ({ btnTitle, display }) => {
  return (
    <>
      <div className="button" style={{ display }}>
        {btnTitle}
      </div>
    </>
  );
};

export default Button;
