import { useState, useEffect } from 'react';

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
  const [sorted, setSorted] = useState(false);
  const changeSorted = () => {
    setSorted(prev => !prev);
  };

  useEffect(() => {
    if (sorted) {
      bidders.sort((a, b) => b.bidPrice - a.bidPrice);
    } else {
      bidders.sort((a, b) => +new Date(a.bidDate) - +new Date(b.bidDate));
    }
  }, [sorted]);

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>입찰 목록</S.Title>
        <S.SortButton onClick={changeSorted}>{sorted ? '최신 순' : '입찰가 순'}</S.SortButton>
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
