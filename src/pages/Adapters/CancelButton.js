import React from 'react'
import { Button } from 'antd'

const CancelButton = props => {
  return (
    <Button className="ml-3" icon={props.icon} size={props.size} onClick={props.onClick}>
      {props.text}
    </Button>
  )
}

export default CancelButton
