import React from "react";

const Title = ({ title, textAlign, paddingBottom }) => {
  return (
    <>
      <h2 className="title" style={{ textAlign, paddingBottom }}>
        {title}
      </h2>
    </>
  );
};

export default Title;
