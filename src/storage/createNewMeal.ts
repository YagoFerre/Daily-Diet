import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_KEY } from './storageConfig'
import { MealDTO } from '../utils/MealDTO'

import { getAllMeals } from './getAllMeals'

export async function createNewMeal(newMeal: MealDTO) {
  try {
    const storedMeals = await getAllMeals()
    const storage = JSON.stringify([...storedMeals, newMeal])

    await AsyncStorage.setItem(MEAL_KEY, storage)
  } catch (error: any) {
    throw new Error(error)
  }
}
