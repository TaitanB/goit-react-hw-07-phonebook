import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { deleteContact } from 'redux/contactsSlice';
import { getContacts, filtered } from 'redux/selectors';

import {
  BtnContact,
  ContactItem,
  AllContacts,
  FilteredContacts,
} from './Contacts.styled';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(filtered);

  // console.log(`contacts: ${contacts}`);

  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const deleteContactId = id => {
    // console.log(id);
    dispatch(deleteContact(id));
    toast.success('Contact deleted!');
  };

  return (
    <>
      {filter && (
        <FilteredContacts>
          Filtered contacts: <b>{filteredContacts.length}</b>
        </FilteredContacts>
      )}
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <ContactItem>
                <p>
                  {name}: <b>{number}</b>
                </p>
                <BtnContact
                  type="BtnContact"
                  onClick={() => deleteContactId(id)}
                >
                  Delete
                </BtnContact>
              </ContactItem>
            </li>
          );
        })}
      </ul>
      <AllContacts>
        All contacts: <b>{contacts.length}</b>
      </AllContacts>
    </>
  );
};

export default ContactsList;
