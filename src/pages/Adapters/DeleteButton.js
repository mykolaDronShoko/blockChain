import React from 'react'
import BaseButton from './index'
import { Popconfirm, message, Button, Icon } from 'antd'
const DeleteButton = props => {
  const text = 'Are you sure to delete this element?'
  return (
    <Popconfirm placement="top" onConfirm={props.confirm} title={text} okText="Yes" cancelText="No">
      <Button size="small">
        <Icon type="close" />
        Remove
      </Button>
    </Popconfirm>
  )
}

export default DeleteButton
