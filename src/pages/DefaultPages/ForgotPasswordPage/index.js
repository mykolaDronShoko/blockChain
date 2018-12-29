import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import Forgot from "./Forgot";
import AppContent from "../../../components/LayoutComponents/Content/index";

class ForgotPasswordPage extends React.Component {
  render() {
    const { match, ...props } = this.props;
    return (
      <div>
        <Page {...props}>
          <Helmet title="Forgot Password" />
          <Forgot match={match} />
        </Page>
      </div>
    );
  }
}

export default ForgotPasswordPage;
