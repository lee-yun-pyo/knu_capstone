import { Timer } from './Timer';

import * as S from './style';

interface Props {
  low: number;
  upper: number;
  current: number;
  deadLineTime: string;
}

export function PriceInfo({ low, upper, current, deadLineTime }: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Box>
          <S.TitleText>하한가</S.TitleText>
          <S.InfoText>
            <S.Price type={'low'}>{low.toLocaleString()}</S.Price>원
          </S.InfoText>
        </S.Box>
        <S.Box>
          <S.TitleText>상한가</S.TitleText>
          <S.InfoText>
            <S.Price type={'upper'}>{upper.toLocaleString()}</S.Price>원
          </S.InfoText>
        </S.Box>
      </S.Wrapper>
      <S.Wrapper>
        <S.Box>
          <S.TitleText>현재가</S.TitleText>
          <S.InfoText>
            <S.Price type={'current'}>{current.toLocaleString()}</S.Price>원
          </S.InfoText>
        </S.Box>
        <S.Box>
          <S.TitleText>남은 시간</S.TitleText>
          <Timer deadLineTime={deadLineTime} />
        </S.Box>
      </S.Wrapper>
    </S.Container>
  );
}
