import React from 'react'

import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonTypeStyleProps, Container, Title, ButtonIcon } from './styles'

interface Props extends TouchableOpacityProps {
  type?: ButtonTypeStyleProps
  title: string
  icon?: keyof typeof MaterialIcons.glyphMap
  showIcon?: boolean
}

export function Button({
  type = 'primary',
  title,
  showIcon = false,
  icon,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      {showIcon && <ButtonIcon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
