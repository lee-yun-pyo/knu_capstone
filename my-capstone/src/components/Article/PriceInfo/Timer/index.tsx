import { useState, useEffect } from 'react';

import { ClockIcon } from '@/components/common/ClockIcon';

import { getLeftTimeByUnit, getTimeToNumber } from '@/utils';

import * as S from './style';

interface Props {
  deadLineTime: string;
}

export function Timer({ deadLineTime }: Props) {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    const targetTime = getTimeToNumber(deadLineTime);
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = targetTime - now;

      setHours(getLeftTimeByUnit('hours', timeDiff));
      setMinutes(getLeftTimeByUnit('minutes', timeDiff));
      setSeconds(getLeftTimeByUnit('seconds', timeDiff));

      if (timeDiff < 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [deadLineTime]);

  return (
    <S.Container>
      <ClockIcon />
      {parseInt(minutes) < 0 ? (
        <S.Text>마감</S.Text>
      ) : (
        hours !== '' && (
          <S.Time>
            {hours}:{minutes}:{seconds}
          </S.Time>
        )
      )}
    </S.Container>
  );
}
