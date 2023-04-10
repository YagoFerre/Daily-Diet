import React from 'react'

import { Container, ImageUser, Logo } from './styles'

import logoImg from '../../assets/logo.png'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />

      <ImageUser source={{ uri: 'https://github.com/YagoFerre.png' }} />
    </Container>
  )
}
