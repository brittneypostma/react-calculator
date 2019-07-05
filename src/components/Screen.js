import React from "react";
import "../styles/styles.css";

export const Screen = props => {
  return (
    <div className="screen">
      <p className="computation-screen" id="display">
        {props.equation}
      </p>
      <p className="result-screen" id="display">
        {props.content}
      </p>
    </div>
  );
};
