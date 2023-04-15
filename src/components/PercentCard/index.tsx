import React from 'react'

import { TouchableOpacityProps } from 'react-native'

import { Container, Icon, Subtitle, Title } from './styles'

interface Props extends TouchableOpacityProps {
  title: string
  onDiet: boolean
}

export function PercentCard({ title, onDiet, ...rest }: Props) {
  return (
    <Container onDiet={onDiet} {...rest}>
      <Icon onDiet={onDiet} />
      <Title>{title}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}
