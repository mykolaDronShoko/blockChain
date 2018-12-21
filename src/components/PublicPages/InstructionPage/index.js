import React from 'react'
import Page from 'components/LayoutComponents/Page'
import Helmet from 'react-helmet'
import Instruction from './Instruction/index'

class InstructionPage extends React.Component {
  static defaultProps = {
    pathName: 'Instruction',
  }

  render() {
    const { match, ...props } = this.props
    return (
      <div>
        <Page {...props}>
          <Helmet title="Instruction Page" />
          <Instruction />
        </Page>
      </div>
    )
  }
}

export default InstructionPage
