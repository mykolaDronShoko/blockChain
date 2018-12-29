import React from "react";

const BaseContainer = props => {
  return (
    <div className="row">
      <div className="col-lg-6">{props.children}</div>
    </div>
  );
};

export default BaseContainer;
