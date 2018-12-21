import React from 'react'
import { Table, Icon, Input, Button, Spin, Divider } from 'antd'
/* import * as ax from '../../../../services/axios-services'
import * as services from '../../../../services/notifi-service'
import { MAGIC } from '../../../../globalURL' */
class Footer extends React.Component {
  state = {
    magic: {
      Description: '',
      SeoTitle: '',
      Title: '',
      Content: '',
      SeoDescription: '',
    },
  }
  _isMounted = false
  componentDidMount() {
    this._isMounted = true
    //this.getMagic(10);
  }
  componentWillUnmount() {
    this._isMounted = false
  }
  /* getMagic(type) {
    ax.getMethod(MAGIC + '/' + type)
      .then(response => {
        if (this._isMounted) {
          this.setState({ magic: response.data.result })
        }
      })
      .catch(error => {
        this.setState({ loading: false })
        services.openNotificationWithIcon('error', 'Something wrong!!!')
      })
  } */
  render() {
    const { Title, Content, Description } = this.state.magic

    return <div dangerouslySetInnerHTML={{ __html: this.props.settings.footer }} />
  }
}

export default Footer
