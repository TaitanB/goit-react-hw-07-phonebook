import styled from 'styled-components';

export const BtnContact = styled.button`
  padding: 5px 10px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: rgb(104 139 127);
  font-weight: 700;

  :hover,
  :focus {
    background-color: rgb(9 141 96);
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
    padding: 5px;
  }
`;

export const FilteredContacts = styled.div`
  padding-top: 20px;
`;

export const AllContacts = styled.div`
  padding: 10px 0;
`;
