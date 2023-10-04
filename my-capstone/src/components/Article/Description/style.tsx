import styled from '@emotion/styled';

export const Container = styled.div`
  width: 550px;
  margin: 0 auto;
  gap: 18px;

  display: flex;
  flex-direction: column;
`;

export const OwnerWrapper = styled.div`
  gap: 7px;

  display: flex;
  flex-direction: column;
`;

export const Owner = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Location = styled.span`
  font-size: 14px;
  color: #868e96;
`;

export const TitleWrapper = styled.div`
  gap: 18px;

  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  gap: 8px;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export const DateText = styled.p`
  font-size: 14px;
  color: #868e96;
`;

export const FormatedDate = styled.time`
  font-size: 12px;
`;

export const DescriptionText = styled.p``;

export const Division = styled.div`
  width: 100%;
  height: 1px;

  background-color: rgba(0, 0, 0, 0.1);
`;
