import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import TermsConditions from './TermsConditions/index'

class TermsConditionsPage extends React.Component {
  static defaultProps = {
    pathName: 'Terms and Conditions',
  }
  render() {
    const { match, ...props } = this.props
    return (
      <div>
        <Page {...props}>
          <Helmet title="Terms and Conditions Page" />
          <TermsConditions />
        </Page>
      </div>
    )
  }
}

export default TermsConditionsPage
