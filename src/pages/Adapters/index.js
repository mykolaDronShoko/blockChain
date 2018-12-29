import React from 'react'
import { Button, Icon } from 'antd'
import { Link } from 'react-router-dom'
const BaseButton = props => {
  return (
    <Link to={props.url} style={{ marginLeft: '1rem' }}>
      <Button size={props.size} onClick={props.click} type={props.type} htmlType={props.htmlType}>
        <Icon type={props.icon} />
        {props.text}
      </Button>
    </Link>
  )
}

export default BaseButton
