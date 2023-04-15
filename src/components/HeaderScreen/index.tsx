import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { BackButton } from '../BackButton'

import { Container, HeaderContent, HeaderTitle } from './styles'

interface Props {
  title: string
}

export function HeaderScreen({ title }: Props) {
  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <BackButton onPress={handleBack} />
      <HeaderContent>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContent>
    </Container>
  )
}
