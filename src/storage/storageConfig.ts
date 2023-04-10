const MEAL_KEY = '@daily-diet:meals'

interface NewMealTypes {
  id: string
  name: string
  description: string
  date: string
  hour: string
  onDiet: boolean
}

export { MEAL_KEY, NewMealTypes }
