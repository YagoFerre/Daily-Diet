import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Statistics } from '../screens/Statistics'
import { Meal } from '../screens/Meal'
import { EditMeal } from '../screens/EditMeal'
import { NewMealForm } from '../screens/NewMealForm'
import { Feedback } from '../screens/Feedback'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="Meal" component={Meal} />
      <Screen name="EditMeal" component={EditMeal} />
      <Screen name="NewMealForm" component={NewMealForm} />
      <Screen name="Feedback" component={Feedback} />
    </Navigator>
  )
}
