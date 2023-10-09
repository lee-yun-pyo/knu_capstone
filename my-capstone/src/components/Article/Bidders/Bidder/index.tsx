import { calculateDaysAgo } from '@/utils';

import * as S from './style';

interface Props {
  profileImage: string;
  name: string;
  bidDate: string;
  bidPrice: number;
}

export function Bidder({ profileImage, name, bidDate, bidPrice }: Props) {
  const daysAgo = calculateDaysAgo(bidDate);

  return (
    <S.Container>
      <S.InfoWrapper>
        <S.ProfileImage src={profileImage} />
        <S.InfoTextBox>
          <S.UserName>{name}</S.UserName>
          <S.BidDate>{daysAgo}</S.BidDate>
        </S.InfoTextBox>
      </S.InfoWrapper>
      <S.InfoText>
        <S.BidPrice>{bidPrice.toLocaleString()}</S.BidPrice>원
      </S.InfoText>
    </S.Container>
  );
}
