import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface SortButtonProps {
  isSelect: boolean;
}

export const Container = styled.div`
  width: 550px;
  margin: 0 auto;
  padding: 25px;

  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export const TitleWrapper = styled.div`
  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 17px;
`;

export const ButtonBox = styled.div`
  gap: 10px;

  display: flex;
  align-items: center;
`;

export const SortButton = styled.button<SortButtonProps>`
  ${({ isSelect }) => {
    return css`
      padding: 6px 8px;

      font-size: 15px;
      color: ${isSelect ? '#fff' : '#000'};

      border-radius: 999px;
      background-color: ${isSelect ? '#27AE60' : '#e5e5e5'};
    `;
  }}
`;

export const UserWrapper = styled.div`
  height: 200px;
  gap: 10px;

  display: flex;
  flex-direction: column;

  overflow: scroll;
`;
