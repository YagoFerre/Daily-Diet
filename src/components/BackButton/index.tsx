import React from 'react'

import { TouchableOpacityProps } from 'react-native'

import { Container, Icon } from './styles'

interface Props extends TouchableOpacityProps {
  onDiet?: boolean
}

export function BackButton({ onDiet, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon onDiet={onDiet} />
    </Container>
  )
}
