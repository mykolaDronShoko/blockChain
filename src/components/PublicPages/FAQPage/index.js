import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import { Collapse } from 'antd'

import './style.css'
import FAQ from './FAQ/index'
const Panel = Collapse.Panel

class FAQPage extends React.Component {
  static defaultProps = {
    pathName: 'Support',
  }

  render() {
    const { ...props } = this.props
    return (
      <div>
        <Page {...props}>
          <Helmet title="Support Page" />
          <FAQ />
        </Page>
      </div>
    )
  }
}

export default FAQPage
