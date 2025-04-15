import React from "react";

import "./Loader.css";

const Loader = ({ width, height, borderWidth }) => {
  return (
    <>
      <div
        className="lds-ring"
        style={{ width: width, height: height, borderWidth: borderWidth }}
      >
        <div
          style={{ width: width, height: height, borderWidth: borderWidth }}
        ></div>
        <div
          style={{ width: width, height: height, borderWidth: borderWidth }}
        ></div>
        <div
          style={{ width: width, height: height, borderWidth: borderWidth }}
        ></div>
        <div
          style={{ width: width, height: height, borderWidth: borderWidth }}
        ></div>
      </div>
    </>
  );
};

export { Loader };
