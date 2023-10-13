import styled from '@emotion/styled';

export const Container = styled.button`
  width: 550px;
  margin: 0 auto;
  padding: 15px;

  font-size: 20px;
  font-weight: 600;
  color: #fff;

  border-radius: 14px;
  background-color: #17b75e;

  &:disabled {
    background-color: aliceblue;
  }
`;
