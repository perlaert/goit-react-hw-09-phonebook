import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import ContactForm from '../../components//ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

export default function ContactPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
