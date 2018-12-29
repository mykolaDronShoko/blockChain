import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import { Form } from "antd";
import Verification from "./Verification/index";

@Form.create()
class VerificationPage extends React.Component {
  static defaultProps = {
    pathName: "Verification"
  };

  render() {
    const { match, ...props } = this.props;
    return (
      <div>
        <Page {...props}>
          <Helmet title="Verification Page" />
          <Verification />
        </Page>
      </div>
    );
  }
}

export default VerificationPage;
