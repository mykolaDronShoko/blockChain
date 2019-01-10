import React from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import "./style.scss";

class AppFooter extends React.Component {
  render() {
    return (
      <div className="footer footerUI">
        <div className="footer__top">
          <div className="row" style={{ margin: "-10px 0" }}>
            <div className="col-5">
              <div className="row">
                <div className="col-sm-12 ">
                  <div className="">
                    <a
                      className="text-white"
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
                      style={{ width: "40%" }}
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
            <div className="col-lg-7">
              <Menu mode="horizontal">
                <Menu.Item key="Copyright:1">
                  <NavLink to="/home/copyright">
                    <Icon type="book" />
                    Copyright
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="About:2">
                  <NavLink to="/home/disclaimer">
                    <Icon type="compass" />
                    About Us
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="Privacy:2">
                  <NavLink to="/home/privacypolicy">
                    <Icon type="key" />
                    Privacy Policy
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="Terms:2">
                  <NavLink to="/home/termsconditions">
                    <Icon type="safety" />
                    Terms and Conditions
                  </NavLink>
                </Menu.Item>

                <Menu.Item key="Feedback">
                  <NavLink to="/home/contact">
                    <Icon type="mail" />
                    Feedback
                  </NavLink>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </div>
        {/* <div className="footer__bottom">
          <div className="row">
            <div className="col-sm-12">
              <p>© 2019 All rights reserved</p>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default AppFooter;
