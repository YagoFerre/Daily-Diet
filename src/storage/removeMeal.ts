import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_KEY } from './storageConfig'

import { getAllMeals } from './getAllMeals'

export async function removeMeal(mealDeletedById: string) {
  try {
    const storedMeals = await getAllMeals()
    const mealsToRemove = storedMeals.filter(
      (meal) => meal.id !== mealDeletedById,
    )

    await AsyncStorage.setItem(MEAL_KEY, JSON.stringify(mealsToRemove))
    await AsyncStorage.removeItem(mealDeletedById)
  } catch (error: any) {
    throw new Error(error)
  }
}
