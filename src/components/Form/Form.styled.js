import styled from 'styled-components';

export const FormAddContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border: 1px solid blue;
  border-radius: 20px;
  background-color: rgb(112 174 207);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  align-items: center;
`;

export const Input = styled.input`
  background-color: rgb(213 239 230);
  border: 1px solid blue;
  border-radius: 5px;
  padding: 5px;
`;

export const BtnContact = styled.button`
  margin: auto;
  padding: 5px 10px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: #0303ab;
  color: rgb(213 239 230);
  font-weight: 700;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);

  :hover,
  :focus {
    background-color: green;
    scale: 0.9;
  }
`;
