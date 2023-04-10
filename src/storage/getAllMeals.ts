import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_KEY, NewMealTypes } from './storageConfig'

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)

    const meals: NewMealTypes[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error: any) {
    throw new Error(error)
  }
}
