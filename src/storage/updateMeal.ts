import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_KEY, NewMealTypes } from './storageConfig'

import { getAllMeals } from './getAllMeals'

export async function updateMeal(mealUpdateById: string, meal: NewMealTypes) {
  try {
    const storedMeals = await getAllMeals()

    const mealToUpdate = storedMeals.findIndex(
      (meal) => meal.id === mealUpdateById,
    )

    await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(mealToUpdate))
  } catch (error: any) {
    throw new Error(error)
  }
}
