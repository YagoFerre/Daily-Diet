import styled from 'styled-components/native'

interface Props {
  onDiet: boolean
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, onDiet }) =>
    onDiet === true ? theme.colors.green_light : theme.colors.red_light};
`

export const Header = styled.View`
  width: 100%;
  padding: 24px;

  flex-direction: row;
  justify-content: center;
  margin-bottom: 12px;

  margin-top: 26px;
`

export const HeaderContent = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: 32px;

  margin-top: 12px;
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_2};
  font-size: 14px;
`

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.gray_7};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const StatisticsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_1};
  font-size: 14px;

  text-align: center;
  margin-top: 32px;
  margin-bottom: 23px;
`

export const StatisticCardContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
`

export const StatisticBox = styled.View`
  width: 170px;
`
