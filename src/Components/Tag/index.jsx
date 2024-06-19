// src/Components/Tag/index.jsx

import React from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

const IconComponent = (isNew) => {
  if (isNew === true) {
    return <FiPlus size="24px" />
  } else if (isNew === false) {
    return <FiX size="24px" />
  } else {
    return null
  }
}

export function Tag({ size, value, isNew = undefined, onClick, ...res }) {
  return (
    <Container size={size} $isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...res} />
      <button onClick={onClick} type="button">
        {IconComponent(isNew)}
      </button>
    </Container>
  )
}
