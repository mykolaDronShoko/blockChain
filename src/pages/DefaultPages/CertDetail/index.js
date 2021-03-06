import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import Cert from "./Cert/index";

class CertDetail extends React.Component {
  static defaultProps = {
    pathName: "Cert"
  };
  render() {
    const { match, ...props } = this.props;
    return (
      <div>
        <Page {...props}>
          <Helmet title="Cert Detail" />
          <Cert {...this.props} />
        </Page>
      </div>
    );
  }
}

export default CertDetail;
