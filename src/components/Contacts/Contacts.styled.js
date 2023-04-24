import styled from 'styled-components';

export const BtnContact = styled.button`
  padding: 5px 10px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: #0303ab;
  color: rgb(213 239 230);
  font-weight: 700;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);

  :hover,
  :focus {
    background-color: rgb(171 38 3);
    color: rgb(213 239 230);
    scale: 0.9;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;
  width: 290px;

  p {
    font-weight: 500;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const FilteredContacts = styled.div`
  font-weight: 500;
  padding-top: 20px;
`;

export const AllContacts = styled.div`
  font-weight: 500;
  padding: 10px 0;
`;
