import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_KEY, NewMealTypes } from './storageConfig'

import { getAllMeals } from './getAllMeals'

export async function createNewMeal(newMeal: NewMealTypes) {
  try {
    const storedMeals = await getAllMeals()
    const storage = JSON.stringify([...storedMeals, newMeal])

    await AsyncStorage.setItem(MEAL_KEY, storage)
  } catch (error: any) {
    throw new Error(error)
  }
}
