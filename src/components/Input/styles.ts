import styled from 'styled-components/native'

import { TextInput } from 'react-native'

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;

  margin-bottom: 4px;
`

export const InputForm = styled(TextInput)`
  padding: 14px;

  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.gray_5};

  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: 16px;
`
