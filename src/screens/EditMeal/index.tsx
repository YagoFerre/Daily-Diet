import React, { useEffect, useState } from 'react'

import {
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import { useForm, Controller } from 'react-hook-form'

import * as yup from 'yup'
import uuid from 'react-native-uuid'

import { Button } from '../../components/Button'
import { HeaderScreen } from '../../components/HeaderScreen'
import { Input } from '../../components/Input'

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

import { useNavigation, useRoute } from '@react-navigation/native'

import { NewMealTypes } from '../../storage/storageConfig'
import { getAllMeals } from '../../storage/getAllMeals'
import { updateMeal } from '../../storage/updateMeal'
import { createNewMeal } from '../../storage/createNewMeal'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface RouteParamsProps {
  id: string
}

export function EditMeal() {
  const [currentValues, setCurrentValues] = useState<NewMealTypes>()

  const navigation = useNavigation()
  const route = useRoute()

  const { id } = route.params as RouteParamsProps

  async function fetchCurrentValues() {
    try {
      const data = await getAllMeals()
      const currentMeal = data.find((meal) => meal.id === id)
      setCurrentValues(currentMeal)
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewMealTypes>({})

  const [isActive, setIsActive] = useState(false)

  async function handleEditMeal(meal: NewMealTypes) {
    try {
      const data = {
        id: uuid.v4() as string,
        name: meal.name,
        description: meal.description,
        date: meal.date,
        hour: meal.hour,
        onDiet: isActive,
      }

      navigation.navigate('Home')
    } catch (error: any) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    fetchCurrentValues()
  }, [id])

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
                    <Input title="Data" onChangeText={onChange} value={value} />
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
                    <Input title="Hora" onChangeText={onChange} value={value} />
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
                  isActive={currentValues?.onDiet === true}
                >
                  <StatusButton onDiet />
                  <Text>Sim</Text>
                </InsideDietButton>

                <OutDietButton
                  onDiet={false}
                  onPress={() => setIsActive(!isActive)}
                  isActive={currentValues?.onDiet === false}
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
