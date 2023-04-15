import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_KEY } from './storageConfig'
import { MealDTO } from '../utils/MealDTO'

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_KEY)

    const meals: MealDTO[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error: any) {
    throw new Error(error)
  }
}
