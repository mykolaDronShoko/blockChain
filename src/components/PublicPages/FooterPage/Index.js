import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import Footer from "./Footer/index";

const FooterPage = props => {
  return (
    <div>
      <Footer settings={props.settings} />
    </div>
  );
};

export default FooterPage;
