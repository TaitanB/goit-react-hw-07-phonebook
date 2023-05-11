import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAddContact } from '../../redux/operations';

import { FormAddContact, Label, Input, BtnContact } from './Form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
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
        // console.log('case phone');
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    // console.log('handleSubmit');

    event.preventDefault();
    dispatch(fetchAddContact({ name, phone }));
    // console.log(name, phone);
    // console.log(event.target.elements.name.value);
    reset();
  };

  const reset = () => {
    // console.log('reset');

    setName('');
    setPhone('');
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
          value={phone}
          onChange={handleChange}
        />
      </Label>
      <BtnContact type="submit">Add contact</BtnContact>
    </FormAddContact>
  );
}
