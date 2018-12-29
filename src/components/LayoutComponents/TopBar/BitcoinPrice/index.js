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
      <div
        className="d-inline-block mr-4"
        style={{ fontSize: "24px", textShadow: "1px 1px #ffffff" }}
      >
        <span className="text-success">
          <strong>Block</strong>
        </span>
        <span className="text-info">
          <strong>Certs</strong>
        </span>
        <span className="text-danger">
          <strong>POC</strong>
        </span>
      </div>
    );
  }
}

export default BitcoinPrice;
