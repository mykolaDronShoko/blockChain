import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Login from './Login'
import AppContent from '../../../components/LayoutComponents/Content/index';

class LoginPage extends React.Component {
  render() {
    const { match, ...props } = this.props
    return (
      <div>
      <Page {...props}>
        <Helmet title="Login" />
        <Login match={match} />
      </Page>
      </div>
      
    )
  }
}

export default LoginPage
