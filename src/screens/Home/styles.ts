import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
  padding: 24px;

  margin-top: 26px;
`

export const NewSnack = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${RFValue(16)}px;

  margin-top: 40px;
  margin-bottom: 8px;
`

export const SectionText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;

  margin-top: 32px;
`

export const EmptyMessage = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  text-align: center;

  margin-top: 32px;
`
