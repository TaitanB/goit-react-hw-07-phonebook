import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid blue;
  background-color: rgb(162 209 193);
  align-items: center;

  > ul {
    padding-left: 15px;
    margin-top: 15px;
  }
`;
