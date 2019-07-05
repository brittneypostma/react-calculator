import React from "react";
import "../styles/styles.css";

export const Button = props => {
  return (
    <button
      className="button"
      type="button"
      id={props.id}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};
