import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 550px;
  margin: 0 auto;
  gap: 10px;

  display: flex;
  flex-direction: column;

  border-radius: 15px;
`;

export const Wrapper = styled.div`
  width: 100%;
  gap: 10px;

  display: flex;
`;

export const Box = styled.div`
  width: 100%;
  padding: 15px;
  gap: 10px;

  display: flex;
  flex-direction: column;

  background-color: #f2f4f6;
  border-radius: 8px;
`;

export const TitleText = styled.span`
  font-weight: 600;
  font-size: 13px;
  color: #868e96;
`;

export const InfoText = styled.span`
  font-size: 13px;
`;

interface PriceProps {
  type: string;
}

export const Price = styled.span<PriceProps>`
  ${({ type }) => {
    return css`
      font-size: 22px;
      font-weight: 600;
      color: ${type === 'low' ? '#3983F6' : type === 'upper' ? '#ee4638' : '#000'};
    `;
  }}
`;
