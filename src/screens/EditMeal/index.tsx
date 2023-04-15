import React, { useState } from 'react'

import {
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import { useForm, Controller } from 'react-hook-form'

import { Button } from '../../components/Button'
import { HeaderScreen } from '../../components/HeaderScreen'
import { Input } from '../../components/Input'
import { InputDates } from '../../components/InputDates'

import { MealDTO } from '../../utils/MealDTO'
import { updateMeal } from '../../storage/updateMeal'

import {
  Container,
  Content,
  ErrorText,
  InsideDietButton,
  OnDietButtonContainer,
  OnDietContainer,
  OnDietText,
  OutDietButton,
  StatusButton,
  TimeContainer,
  TimeContent,
} from './styles'

interface RouteParamsProps {
  id: string
  name: string
  description: string
  date: string
  hour: string
  onDiet: boolean
}

export function EditMeal() {
  const navigation = useNavigation()
  const route = useRoute()

  const { id, name, description, date, hour, onDiet } =
    route.params as RouteParamsProps

  const [isActive, setIsActive] = useState(onDiet)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MealDTO>({
    defaultValues: {
      name,
      description,
      date,
      hour,
    },
  })

  async function handleEditMeal(meal: MealDTO) {
    try {
      const data = {
        id,
        name: meal.name,
        description: meal.description,
        date: String(new Date(meal.date)),
        hour: meal.hour,
        onDiet: isActive,
      }

      await updateMeal(data)
      navigation.navigate('Home')
    } catch (error: any) {
      throw new Error(error)
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <HeaderScreen title="Editar refeição" />
          <Content>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Nome"
                  autoCorrect={false}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
            <ErrorText>{errors.name?.message}</ErrorText>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Descrição"
                  multiline={true}
                  numberOfLines={10}
                  style={{ height: 120, textAlignVertical: 'top' }}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="description"
            />
            <ErrorText>{errors.description?.message}</ErrorText>

            <TimeContainer>
              <TimeContent>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <InputDates
                      mask="99/99/99"
                      title="Data"
                      onChangeText={onChange}
                      value={value}
                      keyboardType="numeric"
                    />
                  )}
                  name="date"
                />
                <ErrorText>{errors.date?.message}</ErrorText>
              </TimeContent>

              <TimeContent>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <InputDates
                      mask="99:99"
                      title="Hora"
                      onChangeText={onChange}
                      value={value}
                      keyboardType="numeric"
                    />
                  )}
                  name="hour"
                />
                <ErrorText>{errors.hour?.message}</ErrorText>
              </TimeContent>
            </TimeContainer>

            <OnDietContainer>
              <OnDietText>Está dentro da dieta?</OnDietText>

              <OnDietButtonContainer>
                <InsideDietButton
                  onDiet={true}
                  onPress={() => setIsActive(!isActive)}
                  isActive={isActive === true}
                >
                  <StatusButton onDiet />
                  <Text>Sim</Text>
                </InsideDietButton>

                <OutDietButton
                  onDiet={false}
                  onPress={() => setIsActive(!isActive)}
                  isActive={isActive === false}
                >
                  <StatusButton onDiet={false} />
                  <Text>Não</Text>
                </OutDietButton>
              </OnDietButtonContainer>
            </OnDietContainer>

            <Button
              title="Salvar alterações"
              onPress={handleSubmit(handleEditMeal)}
            />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
