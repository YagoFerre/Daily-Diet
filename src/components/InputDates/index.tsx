import React from 'react'

import { Container, InputForm, InputLabel } from './styles'
import { MaskedTextInputProps } from 'react-native-mask-text'

interface Props extends MaskedTextInputProps {
  title: string
}

export function InputDates({ title, ...rest }: Props) {
  return (
    <Container>
      <InputLabel>{title}</InputLabel>
      <InputForm {...rest} />
    </Container>
  )
}
