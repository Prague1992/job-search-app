import React from "react";
import "./Loading.scss";

const Loading = ({ width, height, allowLoadingTag }) => {
  return (
    <div>
      <div className="loading" style={{ width: width, height: height }}></div>
      <div className="loading__loader">{allowLoadingTag && "Loading..."}</div>
    </div>
  );
};

export default Loading;
