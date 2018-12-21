import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import PrivacyPolicy from './PrivacyPolicy/index'

class PrivacyPolicyPage extends React.Component {
  static defaultProps = {
    pathName: 'Privacy Policy',
  }

  render() {
    const { match, ...props } = this.props
    return (
      <div>
        <Page {...props}>
          <Helmet title="Privacy Policy Page" />
          <PrivacyPolicy />
        </Page>
      </div>
    )
  }
}

export default PrivacyPolicyPage
