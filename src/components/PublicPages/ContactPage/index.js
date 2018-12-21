import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import { Form } from "antd";
import Contact from "./Contact/index";

@Form.create()
class ContactPage extends React.Component {
  static defaultProps = {
    pathName: "Feedback"
  };

  render() {
    const { match, ...props } = this.props;
    return (
      <div>
        <Page {...props}>
          <Helmet title="Feedback Page" />
          <Contact />
        </Page>
      </div>
    );
  }
}

export default ContactPage;
