import React from 'react'
import BaseButton from './index'

const EditButton = props => {
  return <BaseButton icon="edit" url={props.url} text="Edit" size="small" click={props.onClick} />
}

export default EditButton
