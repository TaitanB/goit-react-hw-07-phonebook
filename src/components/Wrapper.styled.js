import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding: 15px;
  align-items: center;
  border-radius: 15px;
  border: 1px solid blue;
  background: linear-gradient(
    to bottom right,
    hsl(0, 50%, 50%),
    hsl(30, 50%, 50%),
    hsl(60, 50%, 50%),
    hsl(120, 50%, 50%),
    hsl(240, 50%, 50%),
    hsl(270, 50%, 50%),
    hsl(300, 50%, 50%)
  );

  > ul {
    padding-left: 15px;
    margin-top: 15px;
  }
`;
