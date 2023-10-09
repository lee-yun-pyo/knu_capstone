import { useState, useEffect } from 'react';

import { convertToTwoDigits, getLeftTime } from '@/utils';

import * as S from './style';
import { ClockIcon } from '@/components/common/ClockIcon';

interface Props {
  uploadDate: string;
}

export function Timer({ uploadDate }: Props) {
  const [seconds, setSeconds] = useState('');
  const [minutes, setMinutes] = useState('');

  useEffect(() => {
    const targetTime = getLeftTime(uploadDate);
    const timerInterval = setInterval(function () {
      const now = new Date().getTime();
      const timeDiff = targetTime - now;

      const leftMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const leftSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setMinutes(convertToTwoDigits(leftMinutes - 1));
      setSeconds(convertToTwoDigits(leftSeconds));
      if (timeDiff < 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [uploadDate]);

  return (
    <S.Container>
      <ClockIcon />
      {parseInt(minutes) < 0 ? (
        <S.Text>마감</S.Text>
      ) : (
        <S.Time>
          {minutes}:{seconds}
        </S.Time>
      )}
    </S.Container>
  );
}
