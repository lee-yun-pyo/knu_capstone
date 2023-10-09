import { Timer } from './Timer';

import * as S from './style';

interface Props {
  low: number;
  upper: number;
  current: number;
  uploadDate: string;
}

export function PriceInfo({ low, upper, current, uploadDate }: Props) {
  return (
    <S.Container>
      <S.RangePriceBox>
        <S.TitleText>하한가/상한가</S.TitleText>
        <S.InfoText>
          <S.Price>{low.toLocaleString()}</S.Price>원 - <S.Price>{upper.toLocaleString()}</S.Price>원
        </S.InfoText>
      </S.RangePriceBox>
      <S.RangePriceBox>
        <S.TitleText>현재가</S.TitleText>
        <S.InfoText>
          <S.Price>{current.toLocaleString()}</S.Price>원
        </S.InfoText>
      </S.RangePriceBox>
      <S.RangePriceBox>
        <S.TitleText>남은 시간</S.TitleText>
        <Timer uploadDate={uploadDate} />
      </S.RangePriceBox>
    </S.Container>
  );
}
