import styled, { css } from 'styled-components/native'

interface Props {
  onDiet?: boolean
  isActive?: boolean
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_5};
`

export const Content = styled.View`
  padding: 40px 24px 0;
  background-color: ${({ theme }) => theme.colors.gray_7};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const TimeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const TimeContent = styled.View`
  width: 173px;
`

export const OnDietContainer = styled.View`
  width: 100%;
  justify-content: space-between;
`

export const OnDietText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray_2};
  font-size: 14px;

  margin-bottom: 8px;
`

export const OnDietButtonContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;

  flex-direction: row;
  margin-bottom: 48px;
`

export const InsideDietButton = styled.TouchableOpacity<Props>`
  padding: 16px 69px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.gray_6};

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.green_dark};
      background-color: ${theme.colors.green_light};
    `}
`

export const OutDietButton = styled.TouchableOpacity<Props>`
  padding: 16px 69px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.gray_6};

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.red_dark};
      background-color: ${theme.colors.red_light};
    `}
`

export const StatusButton = styled.View<Props>`
  width: 8px;
  height: 8px;

  justify-content: center;
  align-items: center;

  margin-right: 8px;
  border-radius: 4px;

  background-color: ${({ theme, onDiet }) =>
    onDiet === true ? theme.colors.green_dark : theme.colors.red_dark};
`

export const ErrorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.red_dark};
  font-size: 12px;
  margin-top: -14px;
`
