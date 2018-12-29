import React from "react";
import BaseButton from "./index";

const AddButton = props => {
  return (
    <BaseButton
      icon="plus"
      url={props.url}
      text="Create"
      type="primary"
      size={props.size == null ? "" : props.size}
    />
  );
};

export default AddButton;
