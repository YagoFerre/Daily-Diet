import React, { useState, useCallback } from 'react'

import { SectionList } from 'react-native'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { MealCard } from '../../components/MealCard'
import { PercentCard } from '../../components/PercentCard'

import { Container, NewSnack, SectionText } from './styles'

import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { NewMealTypes } from '../../storage/storageConfig'
import { getAllMeals } from '../../storage/getAllMeals'

interface MealProps {
  title: string
  data: NewMealTypes[]
}

export function Home() {
  const [meals, setMeals] = useState<MealProps[]>([])

  const navigation = useNavigation()

  function handleStatistics() {
    navigation.navigate('Statistics')
  }

  function handleToNewMealForm() {
    navigation.navigate('NewMealForm')
  }

  async function fetchMeals() {
    try {
      const data = await getAllMeals()

      const groupedMeals = data.reduce(
        (acc: MealProps[], meal: NewMealTypes) => {
          const mealDate = meal.date

          const sectionWithSameDate = acc.findIndex(
            (section) => section.title === mealDate,
          )

          if (sectionWithSameDate >= 0) {
            acc[sectionWithSameDate].data.push(meal)
          } else {
            acc.push({ title: mealDate, data: [meal] })
          }

          return acc
        },
        [],
      )

      setMeals(groupedMeals)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  return (
    <Container>
      <Header />
      <PercentCard title="90,86%" onPress={handleStatistics} />

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
        renderItem={({ item }) => (
          <MealCard
            id={item.id}
            hour={item.hour}
            name={item.name}
            onDiet={item.onDiet}
          />
        )}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <SectionText>{title}</SectionText>
        )}
      />
    </Container>
  )
}
