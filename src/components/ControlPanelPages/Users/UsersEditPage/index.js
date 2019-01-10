import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import UsersEdit from "./UsersEdit/index";

class UsersEditPage extends React.Component {
  static defaultProps = {
    pathName: "User Edit Page"
  };

  render() {
    const props = this.props;
    console.log(this.props);
    return (
      <Page {...props}>
        <Helmet title="User Edit" />
        <UsersEdit {...props} />
      </Page>
    );
  }
}

export default UsersEditPage;
