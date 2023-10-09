import styled from '@emotion/styled';

export const Container = styled.div`
  width: 550px;
  margin: 0 auto;
  gap: 10px;

  display: flex;
  justify-content: space-between;

  border-radius: 15px;
`;

export const RangePriceBox = styled.div`
  width: 100%;
  padding: 15px;
  gap: 10px;

  display: flex;
  flex-direction: column;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export const TitleText = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: #868e96;
`;

export const InfoText = styled.span`
  font-size: 12px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
