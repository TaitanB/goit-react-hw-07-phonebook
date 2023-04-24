import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { fetchContacts, addContact, deleteContact } from '../api.js';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await fetchContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const result = await addContact(data);
      // console.log(data);
      toast.success('Contact added!');
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      // console.log(name);
      const { contacts } = getState();
      // console.log(contacts.items);
      const normalizedName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        // console.log(name);
        return name.toLowerCase() === normalizedName;
      });

      if (result) {
        toast.success(`${name} is already in contacts!`);
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted!');
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
