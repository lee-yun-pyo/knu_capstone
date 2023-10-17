import { calculateDaysAgo, formatDate } from '@/utils';

import * as S from './style';

interface Props {
  info: {
    owner: string;
    title: string;
    location: string;
    registerDate: string;
    description: string;
  };
}

export function Description({ info }: Props) {
  const { owner, title, location, registerDate, description } = info;
  const daysAgo = calculateDaysAgo(registerDate);
  const formatedDate = formatDate(registerDate);
  return (
    <S.Container>
      <S.OwnerWrapper>
        <S.Owner>{owner}</S.Owner>
        <S.Location>{location}</S.Location>
      </S.OwnerWrapper>
      <S.Division />
      <S.TitleWrapper>
        <S.TitleBox>
          <S.Title>{title}</S.Title>
          <S.DateText>
            {daysAgo} · <S.FormatedDate>{formatedDate} 등록</S.FormatedDate>
          </S.DateText>
        </S.TitleBox>
        <S.DescriptionText>{description}</S.DescriptionText>
      </S.TitleWrapper>
    </S.Container>
  );
}
