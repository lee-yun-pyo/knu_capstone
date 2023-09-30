import { useState } from 'react';

import * as S from './style';

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoText>brocoli</S.LogoText>
        <S.Nav>
          <S.ListBox>
            <S.List>경매 거래</S.List>
          </S.ListBox>
        </S.Nav>
      </S.Wrapper>
      <S.Wrapper>{!isLogin ? <S.SignUpText>Sign Up</S.SignUpText> : <S.SignUpText>MY</S.SignUpText>}</S.Wrapper>
    </S.Container>
  );
}

export default Header;
