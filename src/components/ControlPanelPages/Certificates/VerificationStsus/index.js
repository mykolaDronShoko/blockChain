import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import Stsus from "./Stsus/index";

class VerificationStsus extends React.Component {
  static defaultProps = {
    pathName: "Cert"
  };
  render() {
    const { match, ...props } = this.props;
    return (
      <div>
        <Page {...props}>
          <Helmet title="Cert Detail" />
          <Stsus />
        </Page>
      </div>
    );
  }
}

export default VerificationStsus;
