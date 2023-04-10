import React from 'react'

import { TextInputProps } from 'react-native'

import { Container, InputForm, InputLabel } from './styles'

interface Props extends TextInputProps {
  title: string
}

export function Input({ title, ...rest }: Props) {
  return (
    <Container>
      <InputLabel>{title}</InputLabel>
      <InputForm {...rest} />
    </Container>
  )
}
