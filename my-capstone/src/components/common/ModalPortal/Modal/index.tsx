import { useState, useRef, useEffect } from 'react';

import { XButton } from '../../XButton';

import * as S from './style';

interface Props {
  props: {
    onClick: () => void;
    lowPrice: number;
    upperPrice: number;
    itemImage: string;
  };
}

export function Modal({ props }: Props) {
  const { lowPrice, upperPrice, itemImage, onClick: closeModal } = props;
  const [warning, setWarning] = useState('');
  const [bidFulfilled, setBidFulfilled] = useState(false);
  const [price, setPrice] = useState(0);
  const priceInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    // POST 요청 처리
    closeModal();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value !== '') {
      setPrice(parseInt(event.currentTarget.value) * 100);
      return;
    }
    setPrice(0);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (priceInputRef.current) {
      priceInputRef.current.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (price >= lowPrice && price <= upperPrice) {
      setBidFulfilled(true);
      setWarning('');
      return;
    }
    setBidFulfilled(false);
    if (price === 0) {
      setWarning('');
      return;
    }
    if (price < lowPrice) {
      setWarning('하한가보다 낮게 입찰할 수 없습니다');
      return;
    }
    if (price > upperPrice) {
      setWarning('상한가보다 높게 입찰할 수 없습니다');
      return;
    }
  }, [price]);

  return (
    <S.Container>
      <S.CloseXButton onClick={() => closeModal()}>
        <S.XButtonSpan>
          <XButton width="21" height="21" />
        </S.XButtonSpan>
      </S.CloseXButton>
      <S.Title>입찰</S.Title>
      <S.ItemInfoWrapper>
        <S.ItemImage imageUrl={itemImage} />
        <S.PriceInfoBox>
          <S.PriceInfo>
            <S.PriceTitle>하한가</S.PriceTitle>
            <S.PriceUnitText>
              <S.Price>{lowPrice.toLocaleString()}</S.Price>원
            </S.PriceUnitText>
          </S.PriceInfo>
          <S.PriceInfo>
            <S.PriceTitle>상한가</S.PriceTitle>
            <S.PriceUnitText>
              <S.Price>{upperPrice.toLocaleString()}</S.Price>원
            </S.PriceUnitText>
          </S.PriceInfo>
        </S.PriceInfoBox>
      </S.ItemInfoWrapper>
      <S.ModalInfoText>입찰가의 최소 단위는 100원입니다</S.ModalInfoText>
      <S.Form>
        <S.InputBox>
          <S.InputText
            type="number"
            placeholder="얼마를 입찰할까요?"
            onChange={handleInput}
            step={100}
            ref={priceInputRef}
          />
          <S.WarningMessage>{warning !== '' && warning}</S.WarningMessage>
        </S.InputBox>
        <S.PriceText>{price !== 0 && `${price.toLocaleString()}원`}</S.PriceText>
        <S.BidButton disabled={!bidFulfilled} onClick={handleClick}>
          입찰하기
        </S.BidButton>
      </S.Form>
    </S.Container>
  );
}
