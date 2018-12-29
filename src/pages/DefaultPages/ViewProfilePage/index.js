import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import ProfileApp from "./Profile";

class ViewProfilePage extends React.Component {
  static defaultProps = {
    pathName: "Profile"
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Profile" />
        <ProfileApp {...this.props} />
      </Page>
    );
  }
}

export default ViewProfilePage;
