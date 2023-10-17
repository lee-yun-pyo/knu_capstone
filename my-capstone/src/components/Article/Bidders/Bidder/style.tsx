import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f2f4f6;
  border-radius: 10px;
`;

export const InfoWrapper = styled.div`
  gap: 10px;

  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 55px;
  height: 55px;
`;

export const InfoTextBox = styled.div`
  gap: 7px;

  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const BidDate = styled.span`
  font-size: 13px;
  color: #868e96;
`;

export const InfoText = styled.span`
  font-size: 14px;
`;

export const BidPrice = styled.span`
  font-weight: 600;
  font-size: 16px;
`;
