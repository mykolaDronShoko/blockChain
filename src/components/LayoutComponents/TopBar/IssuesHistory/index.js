import React from "react";
import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";

class IssuesHistory extends React.Component {
  render() {
    return (
      <div className="topbar__dropdown d-inline-block mr-4">
        <Link to="/home/login" className="text-white mr-3">
          <Button ghost>Login</Button>
        </Link>
        <Link to="/home/signup" className="text-white">
          <Button ghost>Create Account</Button>
        </Link>
      </div>
    );
  }
}

export default IssuesHistory;
