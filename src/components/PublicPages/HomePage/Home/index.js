import React from 'react'

class Home extends React.Component {
  render() {
    const { match, ...props } = this.props
    return (
      <div style={{ marginBottom: 0, padding: 'none' }}>
        <video autoPlay loop>
          <source src="http://capitalrms.com/Content/RMS/img/slider/video.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }
}

export default Home
