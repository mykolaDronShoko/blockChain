import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Home from './Home/index'

class HomePage extends React.Component {
  static defaultProps = {
    pathName: '',
  }

  render() {
    const { match, ...props } = this.props
    return (
      <div>
        <Page {...props}>
          <Helmet title="Home Page" />
          <Home />
        </Page>
      </div>
    )
  }
}

export default HomePage
