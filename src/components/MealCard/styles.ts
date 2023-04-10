import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'

interface Props {
  onDiet?: boolean
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  padding: 14px 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray_4};
  border-radius: 6px;

  flex-direction: row;

  justify-content: center;
  align-items: center;

  margin-top: 8px;
  margin-bottom: 6px;
`

export const MealContainer = styled.View`
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.gray_4};
`

export const MealTime = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;

  margin-right: 12px;
`

export const MealTitle = styled.Text`
  flex: 1;

  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  margin-left: 12px;
`

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;

  border-radius: 7px;

  background-color: ${({ theme, onDiet }) =>
    onDiet === true ? theme.colors.green_mid : theme.colors.red_mid};
`
