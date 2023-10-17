import { getTimeToNumber } from '@/utils';

import * as S from './style';

interface Props {
  deadLineTime: string;
  onClick: () => void;
}

export function BidButton({ deadLineTime, onClick }: Props) {
  const targetTime = getTimeToNumber(deadLineTime);
  const now = new Date().getTime();
  const timeDiff = targetTime - now;

  return (
    <>
      <S.Container onClick={onClick} disabled={timeDiff < 0}>
        입찰하기
      </S.Container>
    </>
  );
}
