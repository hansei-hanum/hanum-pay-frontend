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

export const MainPageQrBoxContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 40%;
`;

export const MainPageQrBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  border-top: 5px solid ${colors.white};
  border-right: 5px solid ${colors.white};
`;

export const MainPageQrBox2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-top: 5px solid ${colors.white};
  border-left: 5px solid ${colors.white};
  border-right: 0;
`;

export const MainPageQrBox3 = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-bottom: 5px solid ${colors.white};
  border-right: 5px solid ${colors.white};
`;

export const MainPageQrBox4 = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-bottom: 5px solid ${colors.white};
  border-left: 5px solid ${colors.white};
`;

export const MainPageText = styled.h1`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonElement = styled.div`
  text-align: center;
  padding: 26px 24px;
  background: ${colors.primary};
  border-radius: 40px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: 700;
`;
