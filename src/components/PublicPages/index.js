import React from "react";

import { Route } from "react-router-dom";
import { enquireScreen } from "enquire-js";
import { Link } from "react-router-dom";
import HomePage from "./HomePage/index";
import { Avatar, Icon } from "antd";
import "./style.css";

import ContactPage from "./ContactPage/index";
import CopyrightPage from "./CopyrightPage/index";
import DisclaimerPage from "./DisclaimerPage/index";
import FAQPage from "./FAQPage/index";
import PrivacyPolicyPage from "./PrivacyPolicyPage/index";
import TermsConditionsPage from "./TermsConditionsPage/index";
import InstructionPage from "./InstructionPage/index";
import FooterPage from "./FooterPage/Index";
import MenuPage from "./MenuPage/index";
import { connect } from "react-redux";
import { logout } from "ducks/app";
import LoginPage from "../../pages/DefaultPages/LoginPage/index";
import RegisterPage from "../../pages/DefaultPages/RegisterPage/index";
import AppContent from "../LayoutComponents/Content/index";
import LoginPageKey from "../../pages/DefaultPages/LoginPageKey/index";
import ProfileAppPage from "../../pages/DefaultPages/ProfilePage/index";
import ProfileMenu from "../LayoutComponents/TopBar/ProfileMenu/index";
// import PropTypes from 'prop-types'
// import { initUser } from 'ducks/app'
// import { IMG_URL, SETTINGS_PUBLIC, BASE_URL } from '../../globalURL'
let isMobile;

enquireScreen(b => {
  isMobile = b;
});
/* const mapDispatchToProps = dispatch => ({
  logout: event => {
    event.preventDefault()
    dispatch(logout())
  },
  init: () => dispatch(initUser()),
}) */

/* const mapStateToProps = (state, props) => ({
  userState: state.app.userState,
  showLogiButton: state.notifi.showLogiButton,
}) */

/* @connect(
  mapStateToProps,
  mapDispatchToProps,
) */
class PublicPanel extends React.Component {
  state = {
    user: {},
    settings: {
      parthnerLogo: "",
      parthnerLogoTitle: "",
      footer: "",
      logoTitle: "",
      logo: "",
      video: "",
      contactsMapFrame: ""
    }
  };
  /*  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.userState });
  } */
  _isMounted = false;
  componentDidMount() {
    /* this._isMounted = true
    this.props.init()
    this.getSettings() */
  }
  /* getSettings() {
    ax.getMethod(SETTINGS_PUBLIC)
      .then(response => {
        if (this._isMounted) {
          this.setState({ settings: response.data.result })
        }
      })
      .catch(error => {
        this.setState({ loading: false })
        services.openNotificationWithIcon('error', `Video has not been successfully updated!!!`)
      })
  } */
  render() {
    // const { logout } = this.props
    const { settings } = this.state;
    return (
      <React.Fragment>
        <div id="pub" style={{ backgroundColor: "#ffffff" }}>
          <div className="row">
            <div className="col col-12">
              <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark"
                style={{
                  backgroundImage: "url('resources/square_bg.png')"
                }}
              >
                <div className="container">
                  <a className="navbar-brand" href="#">
                    <img
                      src={settings.logo}
                      style={{ height: "60px" }}
                      alt="Partner Logo"
                    />
                  </a>

                  <div className="" id="">
                    <div className="form-inline my-2 my-md-0">
                      <div className="topbar__right">
                        <ProfileMenu />
                      </div>
                      <ul className="nav">
                        <li className="nav-item">
                          <Link
                            to="/home/login"
                            className="nav-link text-white"
                          >
                            Login
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/home/signup"
                            className="nav-link text-white"
                          >
                            Create Account
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="#" className="nav-link text-white">
                            <Icon
                              type="logout"
                              theme="outlined"
                              className="mr-2"
                            />
                            LogOut
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="">
            <div className="row ">
              <div className="col-12">
                <MenuPage settings={this.state.settings} />
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ width: "100%" }}>
          <AppContent />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/home/login" component={LoginPage} />
          <Route exact path="/home/login-key" component={LoginPageKey} />
          <Route exact path="/home/signup" component={RegisterPage} />
          <Route exact path="/home/profile" component={ProfileAppPage} />
          <Route exact path="/home/viewProfile" component={RegisterPage} />
          <Route exact path={"/home/contact"} component={ContactPage} />
          <Route exact path={"/home/instruction"} component={InstructionPage} />
          <Route exact path={"/home/copyright"} component={CopyrightPage} />
          <Route exact path={"/home/disclaimer"} component={DisclaimerPage} />
          <Route exact path={"/home/faq"} component={FAQPage} />
          <Route
            exact
            path={"/home/privacypolicy"}
            component={PrivacyPolicyPage}
          />
          <Route
            exact
            path={"/home/termsconditions"}
            component={TermsConditionsPage}
          />
        </div>

        <div className="container-fluid" style={{ marginTop: "-7px" }}>
          <div className="row">
            <div className="col-12 bg-dark">
              <div className="container">
                <FooterPage settings={this.state.settings} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PublicPanel;
