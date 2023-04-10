import styled from 'styled-components/native'

interface Props {
  onDiet?: boolean
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, onDiet }) =>
    onDiet === true ? theme.colors.green_light : theme.colors.red_light};
`

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.gray_7};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 20px;

  margin-top: 40px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  margin-top: 8px;
`

export const DateAndHourTitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;

  margin-top: 24px;
`

export const DateAndHourSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray_2};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  margin-top: 8px;
`

export const Tag = styled.View`
  width: 144px;
  padding: 8px 16px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray_6};
  border-radius: 9999px;

  margin-top: 24px;
`

export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, onDiet }) =>
    onDiet === true ? theme.colors.green_dark : theme.colors.red_dark};
  border-radius: 4px;

  margin-right: 8px;
`

export const TagText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_1};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`

export const ButtonContainer = styled.View`
  margin-bottom: 30px;
`

export const ButtonBox = styled.View`
  margin-top: 10px;
`
