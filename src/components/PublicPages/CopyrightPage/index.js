import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Copyright from './Copyright/index'

class CopyrightPage extends React.Component {
  static defaultProps = {
    pathName: 'Copyright',
  }
  render() {
    const { match, ...props } = this.props
    return (
      <div>
        <Page {...props}>
          <Helmet title="Copyright Page" />
          <Copyright />
        </Page>
      </div>
    )
  }
}
export default CopyrightPage
