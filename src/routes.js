import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ConnectedSwitch } from 'reactRouterConnected'
import Loadable from 'react-loadable'
import Page from 'components/LayoutComponents/Page'
import NotFoundPage from 'pages/DefaultPages/NotFoundPage'
import PublicPanel from './components/PublicPages/index';
import AppContent from './components/LayoutComponents/Content/index';

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => null,
  })

const loadableRoutes = {
  // Default Pages
  /* '/login': {
    component: loadable(() => import('pages/DefaultPages/LoginPage')),
  }, */
  '/empty': {
    component: loadable(() => import('pages/DefaultPages/EmptyPage')),
  },
  /* '/home': {
    component: loadable(() => import('components/PublicPages/index')),
  }, */

  // Dashboards
  '/dashboard/alpha': {
    component: loadable(() => import('pages/Dashboard/DashboardAlphaPage')),
  },
}

class Routes extends React.Component {
  timeoutId = null

  componentDidMount() {
    this.timeoutId = setTimeout(
      () => Object.keys(loadableRoutes).forEach(path => loadableRoutes[path].component.preload()),
      5000, // load after 5 sec
    )
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    return (
      <ConnectedSwitch>
        <Route path="/home" component={PublicPanel} />
        {Object.keys(loadableRoutes).map(path => {
          const { ...props } = loadableRoutes[path]
          return <Route key={path} path={path} {...props} />
        })}
        {/* <Route
          render={() => (
            <Page>
              <AppContent />
              <NotFoundPage />
            </Page>
          )}
        /> */}
        <Redirect from="/" to="/home" />
      </ConnectedSwitch>
    )
  }
}

export { loadableRoutes }
export default Routes
