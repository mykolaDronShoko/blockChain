import React from "react";
import { Button } from "antd";
import ProfileMenu from "./ProfileMenu";
import IssuesHistory from "./IssuesHistory";
import ProjectManagement from "./ProjectManagement";
import BitcoinPrice from "./BitcoinPrice";
import HomeMenu from "./HomeMenu";
import LiveSearch from "./LiveSearch";
import "./style.scss";
import MenuPage from "../../PublicPages/MenuPage/index";

class TopBar extends React.Component {
  render() {
    return (
      <div className="row ">
        <div className="col-12">
          <div className="topbar">
            <div className="topbar__left">
              <BitcoinPrice />
            </div>
            <div className="topbar__right">
              <LiveSearch />
              <IssuesHistory />
              <ProfileMenu />
            </div>
          </div>
        </div>
        <div className="col-12">
          <MenuPage style={{ float: "right" }} />
        </div>
      </div>
    );
  }
}

export default TopBar;
