import React from "react";

const Button = ({ btnTitle, display, marginTop }) => {
  return (
    <>
      <div className="button" style={{ display, marginTop }}>
        {btnTitle}
      </div>
    </>
  );
};

export default Button;
