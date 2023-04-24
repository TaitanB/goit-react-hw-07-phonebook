export const getAllContacts = state => state.contacts.items;

export const Filtered = state => state.filter;

export const getFilteredContacts = state => {
  if (!state.filter) {
    return state.contacts.items;
  }
  const result = state.contacts.items.filter(({ name }) => {
    return name.toLowerCase().includes(state.filter.toLowerCase());
  });
  return result;
};
