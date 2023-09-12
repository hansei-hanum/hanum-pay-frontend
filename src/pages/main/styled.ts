import styled from '@emotion/styled';

import { colors } from '@/styles';

export const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 530px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  background-color: ${colors.background};
`;

export const MainPageHeader = styled.div`
  flex: 0.06;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MainPageLogo = styled.img`
  width: 140px;
  height: 50px;
`;

export const MainPageText = styled.h1`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
`;
