import React from 'react'

import {
  Container,
  Content,
  Header,
  HeaderContent,
  StatisticBox,
  StatisticCardContainer,
  StatisticsTitle,
  Subtitle,
  Title,
} from './styles'

import { BackButton } from '../../components/BackButton'
import { StatisticCard } from '../../components/StatisticCard'

import { useNavigation } from '@react-navigation/native'

interface Props {
  onDiet?: boolean
}

export function Statistics({ onDiet = true }: Props) {
  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container onDiet={onDiet}>
      <Header>
        <BackButton onDiet onPress={handleBack} />
        <HeaderContent>
          <Title>90,86%</Title>
          <Subtitle>das refeições dentro da dieta</Subtitle>
        </HeaderContent>
      </Header>

      <Content>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>
        <StatisticCard
          mealNumbers={22}
          title="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard mealNumbers={109} title="refeições registradas" />

        <StatisticCardContainer>
          <StatisticBox>
            <StatisticCard
              mealNumbers={99}
              title="refeições dentro da dieta"
              onDiet
            />
          </StatisticBox>

          <StatisticBox>
            <StatisticCard
              mealNumbers={10}
              title="refeições fora da dieta"
              onDiet={false}
            />
          </StatisticBox>
        </StatisticCardContainer>
      </Content>
    </Container>
  )
}
