/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

import { css } from '@emotion/react';

import { Logo } from '@/assets';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [data, setData] = useState('');

  // check camera permission
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      console.log(stream);
      setData('카메라 권한을 허용됨');
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    })
    .catch(() => {
      setData('카메라 권한을 허용해주세요');
    });

  return (
    <S.MainPageContainer>
      <S.MainPageHeader>
        <S.MainPageLogo src={Logo} alt="logo" />
      </S.MainPageHeader>
      <QrReader
        constraints={{ facingMode: 'user' }}
        onResult={(result: any) => {
          if (result) {
            console.log(result);
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
      <S.ButtonElement
        css={
          data == '카메라 권한을 허용해주세요'
            ? css`
                position: absolute;
                top: 50%;
                left: 50%;
                z-index: 9999;
                transform: translate(-50%, -50%);
              `
            : css`
                display: none;
              `
        }
      >
        {data}
      </S.ButtonElement>
    </S.MainPageContainer>
  );
};
