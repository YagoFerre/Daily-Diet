import React, { useState, useCallback } from 'react'

import { SectionList } from 'react-native'

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { MealCard } from '../../components/MealCard'
import { PercentCard } from '../../components/PercentCard'

import { Container, EmptyMessage, NewSnack, SectionText } from './styles'

import { getAllMeals } from '../../storage/getAllMeals'
import { MealDTO } from '../../utils/MealDTO'
import { mealsStatistics } from '../../utils/mealsStatistics'

interface MealProps {
  title: string
  data: MealDTO[]
}

interface PercentageCardProps {
  percentage: number
}

export function Home() {
  const [meals, setMeals] = useState<MealProps[]>([])
  const [percentageCardData, setPercentageCardData] =
    useState<PercentageCardProps>({} as PercentageCardProps)

  const navigation = useNavigation()

  const percentageFormatted = parseFloat(
    percentageCardData.percentage?.toFixed(2),
  ).toLocaleString('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
  })

  const statusOfDiet = percentageCardData.percentage >= 50 && true

  function handleStatistics() {
    navigation.navigate('Statistics', {
      percentageFormatted,
      statusOfDiet,
    })
  }

  function handleToNewMealForm() {
    navigation.navigate('NewMealForm')
  }

  async function fetchPercentageCardData() {
    const result = await mealsStatistics()
    setPercentageCardData(result)
  }

  async function fetchMeals() {
    try {
      const meals = await getAllMeals()

      const mealsBySection = meals.reduce(
        (mealSection: MealProps[], meal: MealDTO) => {
          const mealDate = meal.date

          const sectionWithSameDate = mealSection.findIndex(
            (section) => section.title === mealDate,
          )

          if (sectionWithSameDate >= 0) {
            mealSection[sectionWithSameDate].data.push(meal)
          } else {
            mealSection.push({ title: mealDate, data: [meal] })
          }

          return mealSection
        },
        [],
      )

      setMeals(mealsBySection.reverse())
    } catch (error: any) {
      throw new Error(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
      fetchPercentageCardData()
    }, []),
  )

  return (
    <Container>
      <Header />
      <PercentCard
        title={percentageFormatted}
        onDiet={statusOfDiet}
        onPress={handleStatistics}
      />

      <NewSnack>Refeições</NewSnack>
      <Button
        title="Nova refeição"
        icon="add"
        showIcon
        onPress={handleToNewMealForm}
      />

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={meals}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <MealCard
            id={item.id}
            hour={item.hour}
            name={item.name}
            onDiet={item.onDiet}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionText>{title.split('/').join('.')}</SectionText>
        )}
        ListEmptyComponent={
          <EmptyMessage>
            Você não tem nenhuma refeição registrada, adicione uma refeição.
          </EmptyMessage>
        }
      />
    </Container>
  )
}
