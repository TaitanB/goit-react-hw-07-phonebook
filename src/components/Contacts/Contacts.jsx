import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';

import { getFilteredContacts, getAllContacts } from '../../redux/selectors';
import { fetchDeleteContact } from '../../redux/operations';

import {
  BtnContact,
  ContactItem,
  AllContacts,
  FilteredContacts,
} from './Contacts.styled';

const ContactsList = filter => {
  const filteredContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);
  // console.log(filteredContacts);
  // console.log(filter);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <>
      {filter.filter && (
        <FilteredContacts>
          Filtered contacts: <b>{filteredContacts.length}</b>
        </FilteredContacts>
      )}
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          // console.log(phone);
          return (
            <li key={id} id={id}>
              <ContactItem>
                <p>
                  {name}: <b>{phone}</b>
                </p>
                <BtnContact type="BtnContact" onClick={() => deleteContact(id)}>
                  Delete
                </BtnContact>
              </ContactItem>
            </li>
          );
        })}
      </ul>
      <AllContacts>
        All contacts: <b>{allContacts.length}</b>
      </AllContacts>
    </>
  );
};

ContactsList.propTypes = {
  filter: propTypes.string.isRequired,
};

export default ContactsList;
