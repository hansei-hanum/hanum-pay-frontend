/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';

import { css } from '@emotion/react';

import { Logo } from '@/assets';
import { useModal } from '@/hooks';
import { Modal } from '@/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [data, setData] = useState('');
  const { open, modalActive } = useModal();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      })
      .catch(() => {
        open();
      });
  }, []);

  return (
    <S.MainPageContainer>
      <S.MainPageHeader
        css={
          modalActive &&
          css`
            flex: 1;
            justify-content: center;
            align-items: flex-start;
          `
        }
      >
        <S.MainPageLogo src={Logo} alt="logo" />
      </S.MainPageHeader>
      {!modalActive ? (
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
            <S.MainPageQrBoxContainer>
              <S.MainPageQrBox />
              <S.MainPageQrBox2 />
              <S.MainPageQrBox3 />
              <S.MainPageQrBox4 />
            </S.MainPageQrBoxContainer>
          )}
        />
      ) : (
        <Modal title="카메라 권한" isButton={true}>
          한움페이를 이용하실 수 없습니다.
          <br />
          카메라 권한을 허용해야 한움 페이를 이용하실 수 있습니다.
          <br />
          카메라 권한을 허용해주세요
        </Modal>
      )}
    </S.MainPageContainer>
  );
};
