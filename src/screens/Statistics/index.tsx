import React, { useEffect, useState } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

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

import { mealsStatistics } from '../../utils/mealsStatistics'

interface StatisticProps {
  inDiet: number
  outDiet: number
  total: number
  sequence: number
}

interface RouteParamsProps {
  percentageFormatted: string
  statusOfDiet: boolean
}

export function Statistics() {
  const [statistics, setStatistics] = useState<StatisticProps>(
    {} as StatisticProps,
  )

  const navigation = useNavigation()
  const route = useRoute()

  const { percentageFormatted, statusOfDiet } = route.params as RouteParamsProps

  function handleBack() {
    navigation.goBack()
  }

  useEffect(() => {
    async function fetchStatistics() {
      const result = await mealsStatistics()
      setStatistics(result)
    }

    fetchStatistics()
  }, [])

  return (
    <Container onDiet={statusOfDiet}>
      <Header>
        <BackButton onDiet={statusOfDiet} onPress={handleBack} />
        <HeaderContent>
          <Title>{percentageFormatted}%</Title>
          <Subtitle>das refeições dentro da dieta</Subtitle>
        </HeaderContent>
      </Header>

      <Content>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>
        <StatisticCard
          mealNumbers={statistics.sequence}
          title="melhor sequência de pratos dentro da dieta"
        />
        <StatisticCard
          mealNumbers={statistics.total}
          title="refeições registradas"
        />

        <StatisticCardContainer>
          <StatisticBox>
            <StatisticCard
              mealNumbers={statistics.inDiet}
              title="refeições dentro da dieta"
              onDiet
            />
          </StatisticBox>

          <StatisticBox>
            <StatisticCard
              mealNumbers={statistics.outDiet}
              title="refeições fora da dieta"
              onDiet={false}
            />
          </StatisticBox>
        </StatisticCardContainer>
      </Content>
    </Container>
  )
}
