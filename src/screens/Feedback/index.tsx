import React from 'react'

import { Text } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import {
  ButtonContainer,
  Container,
  LogoImage,
  Subtitle,
  Title,
} from './styles'

import girlImg from '../../assets/girl.png'
import boyImg from '../../assets/boy.png'

import { Button } from '../../components/Button'

interface RouteProps {
  onDiet: boolean
}

export function Feedback() {
  const navigation = useNavigation()
  const route = useRoute()

  const { onDiet } = route.params as RouteProps

  function handleGoHome() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Title onDiet={onDiet}>
        {onDiet === true ? 'Continue assim!' : 'Que pena!'}
      </Title>
      {onDiet === true ? (
        <Subtitle>
          Você continua{' '}
          <Text style={{ fontWeight: 'bold' }}>dentro da dieta.</Text> Muito
          bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <Text style={{ fontWeight: 'bold' }}>saiu da dieta</Text> dessa
          vez, mas continue se esforçando e não desista!
        </Subtitle>
      )}

      <LogoImage source={onDiet === true ? girlImg : boyImg} />
      <ButtonContainer>
        <Button title="Ir para página inicial" onPress={handleGoHome} />
      </ButtonContainer>
    </Container>
  )
}
