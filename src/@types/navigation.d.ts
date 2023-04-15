export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      Feedback: {
        onDiet: boolean
      }
      Meal: {
        id: string
      }
      EditMeal: {
        id: string
        name: string | undefined
        description: string | undefined
        date: string | undefined
        hour: string | undefined
        onDiet: boolean | undefined
      }
      NewMealForm: undefined
      Statistics: {
        percentageFormatted: string
        statusOfDiet: boolean
      }
    }
  }
}
