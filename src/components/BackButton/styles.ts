import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'

interface Props {
  onDiet?: boolean
}

export const Container = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;

  justify-content: center;
  align-items: center;
`

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, onDiet }) => ({
  size: 24,
  color:
    onDiet === undefined
      ? theme.colors.gray_2
      : onDiet
      ? theme.colors.green_dark
      : theme.colors.red_dark,
}))<Props>``
