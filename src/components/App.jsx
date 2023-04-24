import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import Form from './Form/Form';
import ContactsList from './Contacts/Contacts';
import Filter from './Filter/Filter';

import { fetchAllContacts } from '../redux/operations';
import { Filtered } from '../redux/selectors';

import { Wrapper } from './Wrapper.styled';

export default function App() {
  const filter = useSelector(Filtered);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

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
      <Form />
      <h2>Contacts</h2>
      <Filter filter={filter} />
      <ContactsList filter={filter} />
    </Wrapper>
  );
}
