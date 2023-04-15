import styled from 'styled-components/native'

import { MaskedTextInput } from 'react-native-mask-text'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;

  margin-bottom: 4px;
`

export const InputForm = styled(MaskedTextInput)`
  padding: 14px;

  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.gray_5};

  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${RFValue(16)}px;
`
