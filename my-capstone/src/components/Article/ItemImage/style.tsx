import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface DotProps {
  isCurrent: boolean;
}

interface ImageProps {
  imgUrl: string;
}

interface ArrowButtonProps {
  isShow: boolean;
}

export const Container = styled.div`
  width: 550px;
  height: 500px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  overflow: hidden;
`;

export const ImageBox = styled.div`
  display: flex;
  position: relative;
`;

export const Image = styled.div<ImageProps>`
  ${({ imgUrl }) => {
    return css`
      width: 550px;
      height: 500px;

      border-radius: 10px;
      background-position: center;
      background-image: url(${imgUrl});
      background-size: cover;
    `;
  }}
`;

export const DotBox = styled.div`
  width: 550px;
  bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
`;

export const Dots = styled.ul`
  padding: 7px 10px;
  gap: 9px;

  display: flex;

  border-radius: 99px;

  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Dot = styled.li<DotProps>`
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
