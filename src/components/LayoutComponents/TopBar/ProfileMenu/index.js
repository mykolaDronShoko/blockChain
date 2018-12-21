import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "ducks/app";
import { Menu, Dropdown, Avatar, Badge } from "antd";

const mapDispatchToProps = dispatch => ({
  logout: event => {
    event.preventDefault();
    dispatch(logout());
  }
});

const mapStateToProps = (state, props) => ({
  userState: state.app.userState
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class ProfileMenu extends React.Component {
  state = {};

  render() {
    const { userState, logout } = this.props;
    const menu = (
      <Menu selectable={false}>
        <Menu.Item>
          <div className="rfq__widget__system-status__item">
            <strong>Hello, {userState.role}</strong>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <div className="rfq__widget__system-status__item">
            <strong>Email:</strong> {userState.email}
            <br />
            <strong>Phone:</strong> +00000000000
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Link to="/home/viewProfile">View Profile</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/home/profile">Edit Profile</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a href="javascript: void(0);" onClick={logout}>
            <i className="topbar__dropdownMenuIcon icmn-exit" /> Logout
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="topbar__dropdown d-inline-block">
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          placement="bottomRight"
          onVisibleChange={this.addCount}
        >
          <a className="ant-dropdown-link" href="/">
            <Avatar
              className="topbar__avatar"
              shape="square"
              size="large"
              icon="user"
            />
          </a>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileMenu;
