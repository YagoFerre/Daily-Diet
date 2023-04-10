import React from 'react'

import { ButtonBox, ButtonContainer, Container, Content, Title } from './styles'

import { Button } from '../Button'

interface Props {
  isVisible: boolean
  toggleModal: () => void
  onRemove: () => void
}

export function Modal({ isVisible, toggleModal, onRemove }: Props) {
  return (
    <Container isVisible={isVisible}>
      <Content>
        <Title>Deseja realmente excluir o registro da refeição?</Title>

        <ButtonContainer>
          <ButtonBox>
            <Button type="secondary" title="Cancelar" onPress={toggleModal} />
          </ButtonBox>

          <ButtonBox>
            <Button title="Sim, excluir" onPress={onRemove} />
          </ButtonBox>
        </ButtonContainer>
      </Content>
    </Container>
  )
}
