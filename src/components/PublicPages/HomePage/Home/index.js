import React from "react";

class Home extends React.Component {
  render() {
    const { match, ...props } = this.props;
    return (
      <div style={{ marginBottom: 0, padding: "none", width: "100%" }}>
        <video autoPlay loop style={{ width: "100%" }}>
          <source src="resources/video.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Home;
