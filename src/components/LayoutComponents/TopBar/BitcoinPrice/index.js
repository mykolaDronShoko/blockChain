import React from "react";
import { Line } from "peity-react";
import "./style.scss";

class BitcoinPrice extends React.Component {
  state = {
    chartsData: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2]
  };

  render() {
    const { chartsData } = this.state;
    return (
      <div className="d-inline-block mr-4" style={{ fontSize: "35px" }}>
        <img
          src="resources/images/logo-2925.png"
          alt="logo"
          style={{ height: "64px" }}
        />
        <span className="text-white">
          <strong>Credential</strong>
        </span>
        <span className="text-muted">
          <strong>Check</strong>
        </span>
      </div>
    );
  }
}

export default BitcoinPrice;
