import React from 'react'
import { Button } from 'antd'

const SubmitButton = props => {
  return (
    <Button
      type="primary"
      icon={props.icon}
      loading={props.loading}
      size={props.size}
      htmlType="submit"
      style={{ width: props.width }}
    >
      {props.text}
    </Button>
  )
}

export default SubmitButton
