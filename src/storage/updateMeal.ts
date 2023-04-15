import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_KEY } from './storageConfig'

import { getAllMeals } from './getAllMeals'
import { MealDTO } from '../utils/MealDTO'

export async function updateMeal(updatedMeal: MealDTO) {
  try {
    const storedMeals = await getAllMeals()
    const mealId = storedMeals.findIndex((meal) => meal.id === updatedMeal.id)

    storedMeals[mealId] = updatedMeal

    const storage = JSON.stringify(storedMeals)

    await AsyncStorage.setItem(MEAL_KEY, storage)
  } catch (error: any) {
    throw new Error(error)
  }
}
