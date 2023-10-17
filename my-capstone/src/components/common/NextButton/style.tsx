import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  width: number;
  height: number;
  isShow: boolean;
}

export const Container = styled.div<Props>`
  ${({ width, height, isShow }) => {
    return css`
      width: ${width};
      height: ${height};
      right: 0;

      position: absolute;

      visibility: ${isShow ? 'visible' : 'hidden'};
      z-index: 1;

      border-radius: 50%;

      transition: all 0.1s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }
    `;
  }}
`;
