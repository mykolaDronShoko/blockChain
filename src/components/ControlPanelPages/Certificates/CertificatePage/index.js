import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import CertificatesList from "./CertificatesList/index";

class CertificatesPage extends React.Component {
  static defaultProps = {
    pathName: "Certificates"
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Certificates List" />
        <CertificatesList />
      </Page>
    );
  }
}

export default CertificatesPage;
