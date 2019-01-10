import React from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import "./style.scss";

class AppFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__top">
          <div className="row" style={{ margin: "-10px 0" }}>
            <div className="col-5">
              <div className="row">
                <div className="col-sm-12 ">
                  <div className="">
                    <a
                      className=""
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Blockchain Academy Inc.
                    </a>
                    <img
                      src="resources/images/TBA_logo_2016_reverse_transparent_DLE.fw.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="The Blockchain Academy Inc. "
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <p>© 2019 All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppFooter;
