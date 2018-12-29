import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import CourseEdit from "./CourseEdit/index";

class CourseEditPage extends React.Component {
  static defaultProps = {
    pathName: "Courses Edit"
  };

  render() {
    const props = this.props;
    console.log(this.props);
    return (
      <Page {...props}>
        <Helmet title="Courses Edit" />
        <CourseEdit {...props} />
      </Page>
    );
  }
}

export default CourseEditPage;
