import React from 'react'
import { Divider, Icon, Spin } from 'antd'
/* import * as ax from '../../../../services/axios-services'
import * as services from '../../../../services/notifi-service'
import { MAGIC } from '../../../../globalURL' */
class Copyright extends React.Component {
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
    // this.getMagic(type)
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
    const antIcon = <Icon type="loading" style={{ fontSize: 32 }} spin />
    return (
      <div className="container mt-5" style={{ minHeight: '40rem' }}>
        {this.state.magic.Title !== '' ? (
          <div className="row pb-5">
            <div className="col-12">
              <div className="">
                <h1 className="pl-3">Copyright</h1>
                <p className="pl-3">
                  <small>Copyright Notice | CapitalWave Inc. & CapitalWave Ltd</small>
                </p>
                <Divider />
              </div>
            </div>

            <div className="row">
              <div className="col-12" style={{ padding: ' 0 4rem' }}>
                {Content}
              </div>
            </div>
          </div>
        ) : (
          <span className="" style={{ marginLeft: '50%' }}>
            <Spin indicator={antIcon} />
          </span>
        )}
      </div>
    )
  }
}

export default Copyright
