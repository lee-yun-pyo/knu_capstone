import { useState } from 'react';

import * as S from './style';

interface Props {
  props: {
    onClick: () => void;
    lowPrice: number;
    upperPrice: number;
  };
}

export function Modal({ props }: Props) {
  const [warning, setWarning] = useState(false);
  const handleClick = () => {
    // POST 요청 처리
    props.onClick();
  };

  return (
    <S.Container>
      <S.Form>
        <S.InputBox>
          <S.InputText placeholder="얼마를 입찰할까요?" />
          {!warning && <S.WarningMessage>하한가</S.WarningMessage>}
        </S.InputBox>
        <S.Button onClick={handleClick}>입찰하기</S.Button>
      </S.Form>
    </S.Container>
  );
}
