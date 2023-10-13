import styled from '@emotion/styled';

export const Container = styled.div`
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  background-color: #fff;
  border-radius: 10px;

  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const Form = styled.form`
  gap: 20px;

  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div`
  gap: 7px;

  display: flex;
  flex-direction: column;
`;

export const InputText = styled.input`
  font-size: 22px;
  font-weight: 600;
  color: #b1b7c3;

  background-color: transparent;
  border: none;
  outline: none;
`;

export const WarningMessage = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #d55257;
`;

export const Button = styled.button`
  padding: 10px;

  font-size: 18px;
  color: #fff;

  background-color: #17b75e;
  border-radius: 8px;
`;
