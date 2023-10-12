import { Bidders } from '@/components/Article/Bidders';
import { Description } from '@/components/Article/Description';
import { ItemImage } from '@/components/Article/ItemImage';
import { PriceInfo } from '@/components/Article/PriceInfo';

import * as S from './style';

export function Article() {
  const imageArray = [
    'https://www.lowyinstitute.org/sites/default/files/GettyImages-1134201090.jpeg',
    'https://www.wtstravel.com.sg/wp-content/uploads/2022/04/Bukchon-Hanok-Village.jpg',
    'https://i.pinimg.com/originals/81/f1/a8/81f1a80296de735aefb5476a8f6c23aa.jpg',
  ];

  const titleObj = {
    owner: '행복한 빵집',
    title: '빵',
    location: '서울 노원구',
    registerDate: '2023-10-09 16:44:0',
    description: '브레드 팜',
    deadLineTime: '2023-10-11 17:50:00',
  };

  const priceObj = {
    lowPrice: 2000,
    upperPrice: 4500,
  };

  const currentPrice = 3000;

  const bidders = [
    {
      name: '사용자1',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      bidDate: '2023-10-07 17:44:0',
      bidPrice: 2000,
    },
    {
      name: '사용자2',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      bidDate: '2023-10-06 16:45:0',
      bidPrice: 3000,
    },
    {
      name: '사용자3',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      bidDate: '2023-10-10 18:46:0',
      bidPrice: 5000,
    },
    {
      name: '사용자4',
      profileImage: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
      bidDate: '2023-10-11 20:47:0',
      bidPrice: 6000,
    },
  ];

  return (
    <S.Container>
      <ItemImage images={imageArray} />
      <Description info={titleObj} />
      <PriceInfo
        low={priceObj.lowPrice}
        upper={priceObj.upperPrice}
        current={currentPrice}
        deadLineTime={titleObj.deadLineTime}
      />
      <Bidders bidders={bidders} />
    </S.Container>
  );
}
