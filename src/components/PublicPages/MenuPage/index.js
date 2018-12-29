import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "antd";
// import { IMG_URL } from '../../../globalURL'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuPage extends React.Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <NavLink to="/home" exact>
            <Icon type="home" />
            Home
          </NavLink>
        </Menu.Item>
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
        <Menu.Item key="Support:2">
          <NavLink to="/home/faq">
            <Icon type="question-circle" />
            Support
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
        <Menu.Item key="verification:2">
          <NavLink to="/home/verification">
            <Icon type="safety" />
            Verification
          </NavLink>
        </Menu.Item>
        {/* <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="info-circle" />
              Information
            </span>
          }
        >
          <Menu.Item key="Copyright:1">
            <NavLink to="/copyright">Copyright</NavLink>
          </Menu.Item>
          <Menu.Item key="About:2">
            <NavLink to="/disclaimer">About Us</NavLink>
          </Menu.Item>
          <Menu.Item key="Support:2">
            <NavLink to="/faq">Support</NavLink>
          </Menu.Item>
          <Menu.Item key="Privacy:2">
            <NavLink to="/privacypolicy">Privacy Policy</NavLink>
          </Menu.Item>
          <Menu.Item key="Terms:2">
            <NavLink to="/termsconditions">Terms and Conditions</NavLink>
          </Menu.Item>
        </SubMenu> */}
        <Menu.Item key="Feedback">
          <NavLink to="/home/contact">
            <Icon type="mail" />
            Feedback
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}
export default MenuPage;
