import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Disclaimer from './Disclaimer/index'

class DisclaimerPage extends React.Component {
  static defaultProps = {
    pathName: 'About Us',
  }
  render() {
    const { match, ...props } = this.props
    return (
      <div>
        <Page {...props}>
          <Helmet title="About Us Page" />
          <Disclaimer />
        </Page>
      </div>
    )
  }
}

export default DisclaimerPage
