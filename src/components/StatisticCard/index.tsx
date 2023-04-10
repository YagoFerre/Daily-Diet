import React from 'react'

import { Container, Subtitle, Title } from './styles'

interface Props {
  mealNumbers: number
  title: string
  onDiet?: boolean
}

export function StatisticCard({ mealNumbers, title, onDiet }: Props) {
  return (
    <Container onDiet={onDiet}>
      <Title>{mealNumbers}</Title>
      <Subtitle>{title}</Subtitle>
    </Container>
  )
}
