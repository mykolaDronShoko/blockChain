import React from "react";
import Page from "components/LayoutComponents/Page";
import Helmet from "react-helmet";
import CoursesList from "./CoursesList/index";

class CoursesPage extends React.Component {
  static defaultProps = {
    pathName: "Courses"
  };

  render() {
    const props = this.props;
    return (
      <Page {...props}>
        <Helmet title="Courses List" />
        <CoursesList />
      </Page>
    );
  }
}

export default CoursesPage;
