import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_7};
  padding: 24px;

  margin-top: 26px;
`

export const NewSnack = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: 16px;

  margin-top: 40px;
  margin-bottom: 8px;
`

export const SectionText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;

  margin-top: 32px;
`
