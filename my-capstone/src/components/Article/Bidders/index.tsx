import { useState, useEffect } from 'react';

import { sortType } from '@/constants';

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
  const [sorted, setSorted] = useState(sortType[0]);
  const [sortedBidders, setSortedBidders] = useState([...bidders]);

  const changeSorted = (sortType: string) => {
    setSorted(sortType);
  };

  useEffect(() => {
    if (sorted === sortType[0]) {
      setSortedBidders([...bidders].sort((a, b) => new Date(b.bidDate).getTime() - new Date(a.bidDate).getTime()));
    } else if (sorted === sortType[1]) {
      setSortedBidders([...bidders].sort((a, b) => b.bidPrice - a.bidPrice));
    }
  }, [sorted]);

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>입찰 목록</S.Title>
        <S.ButtonBox>
          {sortType.map((type, index) => (
            <S.SortButton key={index} isSelect={sorted === type} onClick={() => changeSorted(type)}>
              {type}
            </S.SortButton>
          ))}
        </S.ButtonBox>
      </S.TitleWrapper>
      <S.UserWrapper>
        {sortedBidders.map((bidder, index) => (
          <Bidder
            key={index}
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
