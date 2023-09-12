import React from 'react';

import { useModal } from '@/hooks';

import { Text } from '../Text';
import { Button } from '../Button';

import * as S from './styled';

export interface ModalProps {
  title: string;
  children?: React.ReactNode;
  isButton?: boolean;
  onClick?: () => void;
}

export const ModalElement: React.FC<ModalProps> = ({ title, children, isButton, onClick }) => {
  const { close } = useModal();
  return (
    <Modal.Overlay>
      <S.ModalContainer>
        <Text size={22} weight={700}>
          {title}
        </Text>
        <Text size={16} weight={400}>
          {children}
        </Text>
        {isButton && (
          <Button.Container>
            <Button onClick={close} isSecondary>
              취소
            </Button>
            <Button onClick={() => onClick}>확인</Button>
          </Button.Container>
        )}
      </S.ModalContainer>
    </Modal.Overlay>
  );
};

export const Modal = Object.assign(ModalElement, {
  Overlay: S.ModalOverlay,
});
