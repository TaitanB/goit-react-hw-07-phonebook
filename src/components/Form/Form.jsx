import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { nanoid } from 'nanoid';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import { FormAddContact, Label, Input, BtnContact } from './Form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    // console.log('handleChange');

    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        // console.log('case name');
        setName(value);
        break;

      case 'number':
        // console.log('case number');
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    // console.log('handleSubmit');

    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const onSubmit = contact => {
    // console.log('addContact');
    contact.id = nanoid();
    const normalizedName = contact.name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      toast.error(`${contact.name} is already in contacts!`);
      return;
    }
    const newContact = {
      id: contact.id,
      name: contact.name,
      number: contact.number,
    };
    dispatch(addContact(newContact));
    toast.success('Contact added!');
  };

  const reset = () => {
    // console.log('reset');

    setName('');
    setNumber('');
  };

  return (
    <FormAddContact onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <BtnContact type="submit">Add contact</BtnContact>
    </FormAddContact>
  );
}
