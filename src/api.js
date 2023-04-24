import axios from 'axios';

axios.defaults.baseURL = 'https://6445537b914c816083cc2d15.mockapi.io/contacts';

export const fetchContacts = async () => {
  const { data } = await axios.get('/');

  return data;
};

export const addContact = async data => {
  const { data: result } = await axios.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/${id}`);

  return data;
};
