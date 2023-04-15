import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
  onDiet?: boolean
}

export const Container = styled.View<Props>`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;

  border-radius: 8px;
  margin-bottom: 12px;

  background-color: ${({ theme, onDiet }) =>
    onDiet === true
      ? theme.colors.green_light
      : onDiet === false
      ? theme.colors.red_light
      : theme.colors.gray_6};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: ${RFValue(24)}px;
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_2};
  text-align: center;
  font-size: ${RFValue(14)}px;

  margin-top: 8px;
`
