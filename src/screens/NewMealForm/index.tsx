import React, { useState } from 'react'

import {
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

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

import { useNavigation } from '@react-navigation/native'

import { NewMealTypes } from '../../storage/storageConfig'
import { createNewMeal } from '../../storage/createNewMeal'
import AsyncStorage from '@react-native-async-storage/async-storage'

const schema = yup.object().shape({
  name: yup.string().required('Insira o nome da refeição.'),
  description: yup.string().required('Descrição da refeição é obrigatória.'),
  date: yup.string().required('Data é obrigatória.'),
  hour: yup.string().required('Hora é obrigatória.'),
  onDiet: yup.boolean(),
})

export function NewMealForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewMealTypes>({
    resolver: yupResolver(schema),
  })

  const [isActive, setIsActive] = useState(false)

  const navigation = useNavigation()

  async function handleNewMeal(meal: NewMealTypes) {
    try {
      const data = {
        id: uuid.v4() as string,
        name: meal.name,
        description: meal.description,
        date: meal.date,
        hour: meal.hour,
        onDiet: isActive,
      }

      await createNewMeal(data)

      navigation.navigate('Feedback', { onDiet: data.onDiet })
    } catch (error: any) {
      throw new Error(error)
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <HeaderScreen title="Nova refeição" />
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
              title="Cadastrar refeição"
              onPress={handleSubmit(handleNewMeal)}
            />
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
