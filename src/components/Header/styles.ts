import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 36px;
`

export const Logo = styled.Image``

export const ImageUser = styled.Image`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.gray_2};
  border-radius: 20px;
`
