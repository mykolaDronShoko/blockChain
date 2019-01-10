import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import TabPage from "./tabs";

class UsersPage extends React.Component {
  static defaultProps = {
    pathName: "Users"
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Users List" />
        <TabPage />
      </Page>
    );
  }
}

export default UsersPage;
