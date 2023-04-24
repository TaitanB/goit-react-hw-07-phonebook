import React from 'react';
import { useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
import propTypes from 'prop-types';
// import { deleteContact } from 'redux/contactsSlice';
import { getAllContacts } from 'redux/selectors';

import {
  BtnContact,
  ContactItem,
  AllContacts,
  // FilteredContacts,
} from './Contacts.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  // const contacts = useSelector(getAllContacts);
  // const filter = useSelector(getFilteredContacts);

  console.log(`contacts: ${contacts}`);

  // const dispatch = useDispatch();

  // const normalizedFilter = filter.toLowerCase();
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  // const deleteContactId = id => {
  //   // console.log(id);
  //   dispatch(deleteContact(id));
  //   toast.success('Contact deleted!');
  // };

  return (
    <>
      {/* {filteredContacts && (
        <FilteredContacts>
          Filtered contacts: <b>{filteredContacts.length}</b>
        </FilteredContacts>
      )} */}
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} id={id}>
              <ContactItem>
                <p>
                  {name}: <b>{number}</b>
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
        All contacts: <b>{contacts.length}</b>
      </AllContacts>
    </>
  );
};

ContactsList.propTypes = {
  deleteContact: propTypes.func.isRequired,
};

export default ContactsList;
