import styled from 'styled-components/native'

import Modal from 'react-native-modal'

export const Container = styled(Modal)`
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  width: 327px;
  padding: 24px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_7};
  border-radius: 8px;
`

export const Title = styled.Text`
  width: 279px;

  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  text-align: center;

  margin-top: 20px;
  margin-bottom: 32px;
`

export const ButtonContainer = styled.View`
  width: 282px;
  flex-direction: row;

  justify-content: space-between;
`

export const ButtonBox = styled.View`
  width: 135px;
`
