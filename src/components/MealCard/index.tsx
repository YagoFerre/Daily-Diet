import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { TouchableOpacityProps } from 'react-native'

import { Container, MealContainer, MealTime, MealTitle, Status } from './styles'

interface Props extends TouchableOpacityProps {
  id: string
  onDiet?: boolean
  hour: string
  name: string
}

export function MealCard({ id, onDiet, hour, name, ...rest }: Props) {
  const navigation = useNavigation()

  function handleMealDetails() {
    navigation.navigate('Meal', { id })
  }

  return (
    <Container {...rest} onPress={handleMealDetails}>
      <MealContainer>
        <MealTime>{hour}</MealTime>
      </MealContainer>

      <MealTitle>{name}</MealTitle>
      <Status onDiet={onDiet} />
    </Container>
  )
}
