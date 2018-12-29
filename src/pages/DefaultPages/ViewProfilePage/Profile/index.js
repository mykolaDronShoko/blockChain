import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import {
  Button,
  Progress,
  Calendar,
  Tabs,
  Upload,
  Icon,
  Card,
  Menu
} from "antd";
import data from "./data.json";
import "./style.scss";
import Avatar from "components/CleanComponents/Avatar";
import Certs from "./Certs.js";
import { ConnectedSwitch } from "../../../../reactRouterConnected.js";
const actions = (
  <Menu>
    <Menu.Item>
      <Icon type="edit" /> Edit Post
    </Menu.Item>
    <Menu.Item>
      <Icon type="delete" /> Delete Post
    </Menu.Item>
    <Menu.Item>
      <Icon type="frown-o" /> Mark as a Spam
    </Menu.Item>
  </Menu>
);
class ProfileApp extends React.Component {
  state = {
    name: "",
    nickname: "",
    photo: "",
    background: "",
    post: "",
    postsCount: "",
    followersCount: "",
    lastActivity: "",
    status: ""
  };
  componentWillMount() {
    this.setState({
      name: data.name,
      nickname: data.nickname,
      photo: data.photo,
      background: data.background,
      post: data.post,
      postsCount: data.postsCount,
      followersCount: data.followersCount,
      lastActivity: data.lastActivity,
      status: data.status,
      skills: data.skills,
      coursesEnd: data.coursesEnd,
      adress: data.adress,
      profSkills: data.profSkills,
      lastCompanies: data.lastCompanies,
      personal: data.personal,
      posts: data.posts
    });
  }
  /*   shouldComponentUpdate(nextProps) {
    if (this.props.match.url === nextProps.match.url) {
      return false;
    }
    return true;
  }
 */
  componentDidUpdate() {}
  render() {
    let {
      name,
      nickname,
      photo,
      background,
      post,
      postsCount,
      followersCount,
      lastActivity,
      status,
      skills,
      coursesEnd,
      adress,
      profSkills,
      lastCompanies,
      personal,
      posts
    } = this.state;
    console.log(this.props);
    return (
      <div className="profile m-4">
        <div className="row">
          <div className="col-xl-4">
            <div
              className="card profile__header"
              style={{ backgroundImage: "url(" + background + ")" }}
            >
              <div className="profile__header-card">
                <div className="card-body text-center">
                  <Avatar
                    src={photo}
                    size="110"
                    border="true"
                    borderColor="white"
                  />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h2>
                  <span className="text-black mr-2">
                    <strong>{name}</strong>
                  </span>
                  <small className="text-muted">{nickname}</small>
                </h2>
                <p className="mb-1">01.01.2018/England</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Information</strong>
                </h5>
                <dl className="row">
                  <dt className="col-xl-3">Courses End:</dt>
                  <dd className="col-xl-9">
                    Blockchain Essentials for Developers
                  </dd>
                  <dt className="col-xl-3">Address:</dt>
                  <dd className="col-xl-9">{adress}</dd>
                  <dt className="col-xl-3">Skills:</dt>
                  <dd className="col-xl-9">
                    {profSkills.map((skill, index) => (
                      <span className="badge badge-default mr-1" key={index}>
                        {skill}
                      </span>
                    ))}
                  </dd>
                  <dt className="col-xl-3">Last companies:</dt>
                  <dd className="col-xl-9">IBM</dd>
                  <dt className="col-xl-3">Personal Information:</dt>
                  <dd className="col-xl-9">Something about me</dd>
                </dl>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3 text-black">
                  <strong>Calendar</strong>
                </h5>
                <Calendar fullscreen={false} />
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <Certs {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileApp;
