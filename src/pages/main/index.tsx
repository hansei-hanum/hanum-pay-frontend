/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react';

import { Logo } from '@/assets';
import { useModal } from '@/hooks';
import { Section } from '@/components';

import * as S from './styled';

export const MainPage: React.FC = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const { open, modalActive } = useModal();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // setLoading(false);
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
      <Section loading={loading} setData={setData} />
    </S.MainPageContainer>
  );
};
