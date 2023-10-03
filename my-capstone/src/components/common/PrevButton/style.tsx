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

      visibility: ${isShow ? 'visible' : 'hidden'};

      cursor: pointer;
    `;
  }}
`;
