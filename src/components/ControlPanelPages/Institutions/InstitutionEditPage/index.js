import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import InstitutionEdit from "./InstitutionEdit/index";

class InstitutionEditPage extends React.Component {
  static defaultProps = {
    pathName: "Institution Edit"
  };

  render() {
    const props = this.props;
    console.log(this.props);
    return (
      <Page {...props}>
        <Helmet title="Institution Edit" />
        <InstitutionEdit {...props} />
      </Page>
    );
  }
}

export default InstitutionEditPage;
