import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import Credential from "./Credential/index";

class CredentialRecordingFlow extends React.Component {
  static defaultProps = {
    pathName: "Credential Recording"
  };

  render() {
    const props = this.props;
    console.log(this.props);
    return (
      <Page {...props}>
        <Helmet title="Credential Recording" />
        <Credential {...props} />
      </Page>
    );
  }
}

export default CredentialRecordingFlow;
