import styled, { css } from 'styled-components/native'

import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export type ButtonTypeStyleProps = 'primary' | 'secondary'

interface Props {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  border-radius: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.colors.gray_2 : theme.colors.gray_7};

  ${({ theme, type }) =>
    type === 'secondary' &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.gray_2};
    `}
`

export const ButtonIcon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 18,
    color: type === 'primary' ? theme.colors.white : theme.colors.gray_2,
  }),
)<Props>`
  margin-right: 14px;
`

export const Title = styled.Text<Props>`
  color: ${({ theme, type }) =>
    type === 'primary' ? theme.colors.white : theme.colors.gray_2};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`
