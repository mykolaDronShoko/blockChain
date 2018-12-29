import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import CertificateEdit from "./CertificateEdit/index";

class CertificateEditPage extends React.Component {
  static defaultProps = {
    pathName: "Certificate Edit"
  };

  render() {
    const props = this.props;
    console.log(this.props);
    return (
      <Page {...props}>
        <Helmet title="Certificate Edit" />
        <CertificateEdit {...props} />
      </Page>
    );
  }
}

export default CertificateEditPage;
