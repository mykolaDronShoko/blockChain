import React from "react";

import { Route } from "react-router-dom";
import { enquireScreen } from "enquire-js";
import { Link } from "react-router-dom";
import HomePage from "./HomePage/index";
import { Layout as AntLayout } from "antd";
import "./style.css";

import ContactPage from "./ContactPage/index";
import CopyrightPage from "./CopyrightPage/index";
import DisclaimerPage from "./DisclaimerPage/index";
import FAQPage from "./FAQPage/index";
import PrivacyPolicyPage from "./PrivacyPolicyPage/index";
import TermsConditionsPage from "./TermsConditionsPage/index";
import InstructionPage from "./InstructionPage/index";
import LoginPage from "../../pages/DefaultPages/LoginPage/index";
import RegisterPage from "../../pages/DefaultPages/RegisterPage/index";
import AppContent from "../LayoutComponents/Content/index";
import LoginPageKey from "../../pages/DefaultPages/LoginPageKey/index";
import ProfileAppPage from "../../pages/DefaultPages/ProfilePage/index";
import TopBar from "../LayoutComponents/TopBar/index";
import AppFooter from "../LayoutComponents/Footer/index";
import ViewProfilePage from "../../pages/DefaultPages/ViewProfilePage/index";
import CertDetail from "../../pages/DefaultPages/CertDetail/index";
import VerificationPage from "./VerificationPage/index";
import VerificationStsus from "../../pages/DefaultPages/VerificationStsus/index";
import ForgotPasswordPage from "../../pages/DefaultPages/ForgotPasswordPage/index";
// import PropTypes from 'prop-types'
// import { initUser } from 'ducks/app'
// import { IMG_URL, SETTINGS_PUBLIC, BASE_URL } from '../../globalURL'
let isMobile;
const AntContent = AntLayout.Content;
const AntHeader = AntLayout.Header;
const AntFooter = AntLayout.Footer;
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
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.forceUpdate();
    }
  }
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
      <div className="publicUI">
        <AntLayout>
          <AntHeader>
            <TopBar />
          </AntHeader>
          <AntContent style={{ height: "100%" }}>
            <div>
              <AppContent />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/home/login" component={LoginPage} />
              <Route exact path="/home/signup" component={RegisterPage} />
              <Route
                exact
                path="/home/forgot-password"
                component={ForgotPasswordPage}
              />
              <Route exact path="/home/profile" component={ProfileAppPage} />
              <Route
                exact
                path="/home/profile/stsus/:id"
                component={VerificationStsus}
              />
              <Route
                exact
                path="/home/verification"
                component={VerificationPage}
              />
              <Route
                exact
                path="/home/viewprofile"
                component={ViewProfilePage}
              />
              <Route
                exact
                path="/home/viewprofile/detail/:id?"
                component={CertDetail}
              />
              <Route exact path={"/home/contact"} component={ContactPage} />
              <Route
                exact
                path={"/home/instruction"}
                component={InstructionPage}
              />
              <Route exact path={"/home/copyright"} component={CopyrightPage} />
              <Route
                exact
                path={"/home/disclaimer"}
                component={DisclaimerPage}
              />
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
          </AntContent>
          <AntFooter>
            <AppFooter />
          </AntFooter>
        </AntLayout>
      </div>
    );
  }
}
export default PublicPanel;
