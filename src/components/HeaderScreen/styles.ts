import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 24px;

  flex-direction: row;
  justify-content: center;

  margin-top: 26px;
`

export const HeaderContent = styled.View`
  flex: 1;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: 18px;
`
