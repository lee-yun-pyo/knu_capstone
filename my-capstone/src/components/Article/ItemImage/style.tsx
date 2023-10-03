import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ImageProps {
  isCurrent: boolean;
}

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const ImageBox = styled.div`
  width: 600px;
  height: 450px;

  display: flex;
`;

export const Image = styled.img<ImageProps>`
  ${({ isCurrent }) => {
    return css`
      width: 100%;
      height: 100%;

      border-radius: 10px;

      display: ${isCurrent ? 'block' : 'none'};
    `;
  }}
`;

export const DotBox = styled.div`
  width: 600px;
  left: 48px;
  bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
`;

export const Dots = styled.ul`
  padding: 7px 10px;
  gap: 8px;

  display: flex;
  border-radius: 99px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const Dot = styled.li<ImageProps>`
  ${({ isCurrent }) => {
    return css`
      width: 10px;
      height: 10px;

      background-color: ${isCurrent ? '#fff' : 'rgba(255, 255, 255, 0.4)'};
      border-radius: 50%;

      cursor: pointer;
    `;
  }}
`;
