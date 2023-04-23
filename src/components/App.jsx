import React from 'react';
import { Toaster } from 'react-hot-toast';

import Form from './Form/Form';
import ContactsList from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Wrapper } from './Wrapper.styled';

export default function App() {
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
      <Filter />
      <ContactsList />
    </Wrapper>
  );
}
