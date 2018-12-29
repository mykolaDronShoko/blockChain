import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "react-redux-spinner";
import { Route, Switch } from "react-router-dom";
import { BackTop, Layout as AntLayout } from "antd";
import { enquireScreen, unenquireScreen } from "enquire-js";
import AppContent from "./LayoutComponents/Content/index";
import LayoutState from "./LayoutComponents/LayoutState/index";
import Loader from "./LayoutComponents/Loader/index";
import AppMenu from "./LayoutComponents/Menu/index";
import SettingsSider from "./LayoutComponents/SettingsSider/index";
import TopBar from "./LayoutComponents/TopBar/index";
import DashboardAlphaPage from "../../pages/Dashboard/DashboardAlphaPage/index";
import AppFooter from "./LayoutComponents/Footer/index";
import CoursesPage from "./Courses/CoursesPage/index";
import CourseEditPage from "./Courses/CoursesEditPage/index";
import CertificatesPage from "./Certificates/CertificatePage/index";
import CertificateEditPage from "./Certificates/CertificatesEditPage/index";
import CertDetail from "../../pages/DefaultPages/CertDetail/index";
import VerificationStsus from "../../pages/DefaultPages/VerificationStsus/index";
import InstitutionsPage from "./Institutions/InstitutionsPage/index";
import InstitutionEditPage from "./Institutions/InstitutionEditPage/index";
import ViewProfilePage from "../../pages/DefaultPages/ViewProfilePage/index";
import ProfileAppPage from "../../pages/DefaultPages/ProfilePage/index";

const AntContent = AntLayout.Content;
const AntHeader = AntLayout.Header;
const AntFooter = AntLayout.Footer;

const query = {
  "screen-xs": {
    maxWidth: 575
  },
  "screen-sm": {
    minWidth: 576,
    maxWidth: 767
  },
  "screen-md": {
    minWidth: 768,
    maxWidth: 991
  },
  "screen-lg": {
    minWidth: 992,
    maxWidth: 1199
  },
  "screen-xl": {
    minWidth: 1200,
    maxWidth: 1599
  },
  "screen-xxl": {
    minWidth: 1600
  }
};

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

let contentBuffer = {
  pathName: null,
  content: null
};

class ControlPanel extends React.Component {
  static childContextTypes = {
    getContentBuffer: PropTypes.func,
    setContentBuffer: PropTypes.func
  };

  state = {
    isMobile
  };

  /*  getChildContext() {
    return {
      getContentBuffer: () => contentBuffer,
      setContentBuffer: ({ pathName, content }) =>
        (contentBuffer = { pathName, content })
    };
  } */

  /* componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      this.setState({
        isMobile: mobile
      });
    });
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }
 */
  render() {
    const isMobile = !!this.state.isMobile;
    return (
      <div className="cpUI">
        <AntLayout>
          <LayoutState />
          <Loader />
          <Spinner />
          <BackTop />
          <AppMenu isMobile={isMobile} />
          <SettingsSider />
          <AntLayout>
            <AntHeader>
              <TopBar />
            </AntHeader>
            <AntContent style={{ height: "100%" }}>
              <AppContent />
              <Switch>
                <Route
                  exact
                  path="/controlpanel"
                  component={DashboardAlphaPage}
                />
                <Route
                  exact
                  path="/controlpanel/courses"
                  component={CoursesPage}
                />
                <Route
                  exact
                  path="/controlpanel/viewprofile"
                  component={ViewProfilePage}
                />
                <Route
                  exact
                  path="/controlpanel/profile"
                  component={ProfileAppPage}
                />
                <Route
                  exact
                  path="/controlpanel/edit-course"
                  component={CourseEditPage}
                />
                <Route
                  exact
                  path="/controlpanel/add-course"
                  component={CourseEditPage}
                />
                <Route
                  exact
                  path="/controlpanel/certificates"
                  component={CertificatesPage}
                />
                <Route
                  exact
                  path="/controlpanel/viewprofile/detail/:id"
                  component={CertDetail}
                />
                {/* <Route
                  exact
                  path="/controlpanel/certificates/status/:id"
                  component={VerificationStsus}
                /> */}
                <Route
                  exact
                  path="/controlpanel/certificates/edit/:id"
                  component={CertificateEditPage}
                />
                <Route
                  exact
                  path="/controlpanel/certificates/add-sertificate"
                  component={CertificateEditPage}
                />
                <Route
                  exact
                  path="/controlpanel/institutions"
                  component={InstitutionsPage}
                />
                <Route
                  exact
                  path="/controlpanel/institutions/edit-institution/:id"
                  component={InstitutionEditPage}
                />
                <Route
                  exact
                  path="/controlpanel/institutions/add-institution"
                  component={InstitutionEditPage}
                />
              </Switch>
            </AntContent>
            <AntFooter>
              <AppFooter />
            </AntFooter>
          </AntLayout>
        </AntLayout>
      </div>
    );
  }
}

export default ControlPanel;
