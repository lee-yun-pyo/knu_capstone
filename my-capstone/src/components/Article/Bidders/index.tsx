import { Bidder } from './Bidder';

import * as S from './style';

interface BidderType {
  name: string;
  profileImage: string;
  bidDate: string;
  bidPrice: number;
}

interface Props {
  bidders: BidderType[];
}

export function Bidders({ bidders }: Props) {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>입찰 목록</S.Title>
        <S.SortButton>최신 순</S.SortButton>
      </S.TitleWrapper>
      <S.UserWrapper>
        {bidders.map(bidder => (
          <Bidder
            profileImage={bidder.profileImage}
            name={bidder.name}
            bidDate={bidder.bidDate}
            bidPrice={bidder.bidPrice}
          />
        ))}
      </S.UserWrapper>
    </S.Container>
  );
}
