import styled from '@emotion/styled';

import { colors } from '@/styles';

export const SectionLoadingText = styled.h1`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const SectionQrBoxContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 40%;
`;

export const SectionQrBoxRightTop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  border-top: 5px solid ${colors.white};
  border-right: 5px solid ${colors.white};
`;

export const MainPageQrBoxLeftTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-top: 5px solid ${colors.white};
  border-left: 5px solid ${colors.white};
  border-right: 0;
`;

export const MainPageQrBoxRightBottom = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-bottom: 5px solid ${colors.white};
  border-right: 5px solid ${colors.white};
`;

export const MainPageQrBoxLeftBottom = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  border-bottom: 5px solid ${colors.white};
  border-left: 5px solid ${colors.white};
`;
