import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'
import { ArrowUpRight } from 'phosphor-react-native'

interface Props {
  onDiet: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 20px 16px;

  background-color: ${({ theme, onDiet }) =>
    onDiet === true ? theme.colors.green_light : theme.colors.red_light};

  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: 32px;
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_2};
  font-size: 14px;
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, onDiet }) => ({
  size: 32,
  color: onDiet === true ? theme.colors.green_dark : theme.colors.red_dark,
}))<Props>`
  position: absolute;
  right: 10px;
  top: 10px;
`
