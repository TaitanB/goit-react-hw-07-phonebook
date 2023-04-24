// export const getContacts = state => state.contacts;

// export const filtered = state => state.filter;

export const getAllContacts = ({ items }) => items;

export const getFilteredContacts = ({ items, filter }) => {
  if (!filter) {
    return items;
  }
  const result = items.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
  return result;
};
