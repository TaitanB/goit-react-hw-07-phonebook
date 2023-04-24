import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from '../api';
import Form from './Form/Form';
import ContactsList from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Wrapper } from './Wrapper.styled';

import { useDispatch } from 'react-redux';
// import { setFilter } from '../redux/filter/filter-slice';

import { getFilteredContacts } from '../redux/selectors';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../redux/operations';

export default function App() {
  const filteredContacts = useSelector(getFilteredContacts);
  console.log(filteredContacts);
  // const filter = useSelector(filtered);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleChangeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(getFilteredContacts(value));
  };

  const onDeleteContact = id => {
    const action = fetchDeleteContact(id);
    dispatch(action);
  };

  return (
    <Wrapper>
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid blue',
            padding: '15px',
            marginTop: '30px',
          },
        }}
      />
      <h1>Phonebook</h1>
      <Form onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleChangeFilter} />
      <ContactsList
        deleteContact={onDeleteContact}
        contacts={filteredContacts}
      />
    </Wrapper>
  );
}

fetchContacts();
