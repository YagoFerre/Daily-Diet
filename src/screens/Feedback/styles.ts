import styled from 'styled-components/native'

interface Props {
  onDiet?: boolean
}

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_7};
`

export const Title = styled.Text<Props>`
  color: ${({ theme, onDiet }) =>
    onDiet === true ? theme.colors.green_dark : theme.colors.red_dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: 16px;

  text-align: center;
  margin-top: 8px;
`

export const LogoImage = styled.Image`
  margin-top: 40px;
`

export const ButtonContainer = styled.View`
  width: 190px;
  margin-top: 32px;
`
