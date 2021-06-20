import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export default function ContactList() {
  const items = useSelector(contactsSelectors.getVisibleContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(contactsOperations.deleteContact(id));
  };

  return (
    <section>
      {items.length !== 0 ? (
        <ul className={style.contactsList}>
          {items.map(({ id, name, number }) => (
            <li key={id} className={style.contactItem}>
              <ContactItem
                name={name}
                number={number}
                onDelete={() => onDeleteContact(id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Phonebook is empty</p>
      )}
    </section>
  );
}

ContactList.propsTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
