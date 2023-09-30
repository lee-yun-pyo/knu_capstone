import styled from '@emotion/styled';

export const Container = styled.header`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.06), 0 0 2px rgba(0, 0, 0, 0.07);
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  gap: 15px;

  display: flex;
  align-items: center;
`;

export const Nav = styled.nav``;

export const ListBox = styled.ul``;

export const List = styled.li``;

export const SignUpText = styled.span`
  padding: 8px;

  border-radius: 50px;
  border: 1px solid #000;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
