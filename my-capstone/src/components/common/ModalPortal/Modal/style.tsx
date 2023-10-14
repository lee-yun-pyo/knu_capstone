import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  top: 50%;
  left: 50%;
  padding: 75px;
  gap: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  position: fixed;

  background-color: #fff;
  border-radius: 18px;

  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const CloseXButton = styled.button`
  width: 44px;
  height: 44px;
  top: 20px;
  left: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
`;

export const XButtonSpan = styled.span`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e8e8ed;

  border-radius: 50%;
`;

export const Title = styled.h3`
  font-size: 17px;
  font-weight: 600;
`;

export const ItemInfoWrapper = styled.div`
  gap: 30px;

  display: flex;
  align-items: center;
`;

interface ItemImageProps {
  imageUrl: string;
}

export const ItemImage = styled.div<ItemImageProps>`
  ${({ imageUrl }) => {
    return css`
      width: 130px;
      height: 130px;

      border-radius: 10px;
      background-position: center;
      background-image: url(${imageUrl});
      background-size: cover;
    `;
  }}
`;

export const PriceInfoBox = styled.div`
  width: 230px;
  gap: 20px;

  display: flex;
  flex-direction: column;
`;

export const PriceInfo = styled.div`
  gap: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #b1b7c3;
`;

export const PriceUnitText = styled.span`
  font-size: 15px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 10px;
  gap: 20px;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const InputBox = styled.div`
  gap: 7px;

  display: flex;
  flex-direction: column;
`;

export const InputText = styled.input`
  font-size: 22px;
  font-weight: 600;

  background-color: transparent;
  border: none;
  outline: none;

  color: transparent;

  &:focus {
    outline: none;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  &::placeholder {
    color: #b1b7c3;
  }
`;

export const PriceText = styled.span`
  top: 0;
  left: 0;

  font-size: 22px;
  font-weight: 600;

  position: absolute;
`;

export const WarningMessage = styled.p`
  height: 14px;

  font-size: 14px;
  font-weight: 600;
  color: #d55257;
`;

export const BidButton = styled.button`
  padding: 10px;

  font-size: 18px;
  color: #fff;

  background-color: #0077ed;
  border-radius: 8px;

  &:disabled {
    cursor: auto;
    background-color: rgba(0, 119, 237, 0.3);
  }
`;
