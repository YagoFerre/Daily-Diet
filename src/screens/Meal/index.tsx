import React, { useState, useEffect } from 'react'

import { View } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '../../components/Button'
import { HeaderScreen } from '../../components/HeaderScreen'
import { Modal } from '../../components/Modal'

import {
  ButtonBox,
  ButtonContainer,
  Container,
  Content,
  DateAndHourSubtitle,
  DateAndHourTitle,
  Status,
  Subtitle,
  Tag,
  TagText,
  Title,
} from './styles'

import { getAllMeals } from '../../storage/getAllMeals'
import { removeMeal } from '../../storage/removeMeal'
import { MealDTO } from '../../utils/MealDTO'

interface RouteParamsProps {
  id: string
}

export function Meal() {
  const [mealDetails, setMealDetails] = useState<MealDTO>()
  const [isModalVisible, setModalVisible] = useState(false)

  const navigation = useNavigation()
  const route = useRoute()

  const { id } = route.params as RouteParamsProps

  function handleToggleModal() {
    setModalVisible(!isModalVisible)
  }

  async function fetchMealDetails() {
    try {
      const data = await getAllMeals()
      const currentMeal = data.find((meal) => meal.id === id)
      setMealDetails(currentMeal)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  async function handleRemoveMeal() {
    try {
      await removeMeal(id)
      navigation.navigate('Home')
    } catch (error: any) {
      throw new Error(error)
    }
  }

  function handleEditMeal() {
    try {
      navigation.navigate('EditMeal', {
        id,
        name: mealDetails?.name,
        description: mealDetails?.description,
        date: mealDetails?.date,
        hour: mealDetails?.hour,
        onDiet: mealDetails?.onDiet,
      })
    } catch (error: any) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    fetchMealDetails()
  }, [id])

  return (
    <Container onDiet={mealDetails?.onDiet}>
      <HeaderScreen title="Refeição" />
      <Content>
        <View>
          <Title>{mealDetails?.name}</Title>
          <Subtitle>{mealDetails?.description}</Subtitle>

          <DateAndHourTitle>Data e hora</DateAndHourTitle>
          <DateAndHourSubtitle>
            {mealDetails?.date} às {mealDetails?.hour}
          </DateAndHourSubtitle>

          <Tag>
            <Status onDiet={mealDetails?.onDiet} />
            <TagText>
              {mealDetails?.onDiet === true ? 'dentro' : 'fora'} da dieta
            </TagText>
          </Tag>
        </View>

        <Modal
          isVisible={isModalVisible}
          toggleModal={handleToggleModal}
          onRemove={handleRemoveMeal}
        />

        <ButtonContainer>
          <ButtonBox>
            <Button
              showIcon
              title="Editar refeição"
              icon="border-color"
              onPress={handleEditMeal}
            />
          </ButtonBox>

          <ButtonBox>
            <Button
              showIcon
              type="secondary"
              title="Excluir refeição"
              icon="delete-outline"
              onPress={handleToggleModal}
            />
          </ButtonBox>
        </ButtonContainer>
      </Content>
    </Container>
  )
}
