import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import InstitutionsList from "./InstitutionsList/index";

class InstitutionsPage extends React.Component {
  static defaultProps = {
    pathName: "Institutions"
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Institutions List" />
        <InstitutionsList />
      </Page>
    );
  }
}

export default InstitutionsPage;
