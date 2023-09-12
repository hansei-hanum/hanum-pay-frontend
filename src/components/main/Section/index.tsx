/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { QrReader } from 'react-qr-reader';

import { useModal } from '@/hooks';
import { Modal } from '@/components/common';

import * as S from './styled';

export interface SectionProps {
  loading: boolean;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

export const Section: React.FC<SectionProps> = ({ loading, setData }) => {
  const { modalActive } = useModal();
  if (modalActive) {
    return (
      <Modal title="카메라 권한" isButton={false}>
        한움페이를 이용하실 수 없습니다.
        <br />
        카메라 권한을 허용해야 한움 페이를 이용하실 수 있습니다.
        <br />
        카메라 권한을 허용해주세요
      </Modal>
    );
  } else if (loading) {
    return <S.SectionLoadingText>Loading...</S.SectionLoadingText>;
  } else {
    return (
      <QrReader
        constraints={{ facingMode: 'user' }}
        onResult={(result: any) => {
          if (result) {
            console.log(result, 'result');
            setData(result?.text);
          }
        }}
        containerStyle={{
          width: '100%',
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        ViewFinder={() => (
          <S.SectionQrBoxContainer>
            <S.SectionQrBoxRightTop />
            <S.MainPageQrBoxLeftTop />
            <S.MainPageQrBoxRightBottom />
            <S.MainPageQrBoxLeftBottom />
          </S.SectionQrBoxContainer>
        )}
      />
    );
  }
};
