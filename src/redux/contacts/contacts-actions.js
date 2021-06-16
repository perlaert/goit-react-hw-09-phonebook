import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contact/fetchContactRequest');
export const fetchContactSuccess = createAction('contact/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contact/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contact/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteontactError');

export const changeFilter = createAction('contact/changeFilter');
