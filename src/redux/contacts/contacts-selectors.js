import { createSelector } from 'reselect';

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getAllContacts,
  getFilter,
  getVisibleContacts,
};

// const getVisibleContacts = state => {
//     const items = getAllContacts(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();

//     return items.filter(item =>
//     item.name.toLowerCase().includes(normalizedFilter),
//   );
// }
