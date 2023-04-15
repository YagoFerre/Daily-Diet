/* eslint-disable no-unused-vars */
import { getAllMeals } from '../storage/getAllMeals'

export async function mealsStatistics() {
  try {
    const meals = await getAllMeals()

    let sequenceCount = 0
    const mealsStatistic = meals.reduce(
      (acc, meal) => {
        if (meal.onDiet === true) {
          acc.inDiet += 1
          acc.total += 1

          // Está dentro da dieta então a contagem da sequência passa a ser ela mesmo + 1
          sequenceCount += 1

          // O valor atual da sequência de pratos dentro da dieta so vai mudar se a contagem for maior do que a sequência atual.
          if (sequenceCount > acc.sequence) {
            // Se a contagem atual da sequência for maior que o valor atual da sequência, então o valor atual da sequência passa a ser o valor da contagem.
            acc.sequence = sequenceCount
          }
        } else {
          acc.outDiet += 1
          acc.total += 1

          // Não está dentro da dieta, então o a contagem zera
          sequenceCount = 0
        }

        return acc
      },
      {
        inDiet: 0,
        outDiet: 0,
        total: 0,
        percentage: 0,
        sequence: 0,
      },
    )

    mealsStatistic.percentage =
      (mealsStatistic.inDiet / mealsStatistic.total) * 100 || 0

    return mealsStatistic
  } catch (error: any) {
    throw new Error(error)
  }
}
