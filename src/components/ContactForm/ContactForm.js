import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations';
import style from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = useCallback(event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип ${name} не обрабатывается`);
    }
  }, []);

  const allContacts = useSelector(contactsSelectors.getAllContacts);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      const existingName = allContacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );

      if (existingName) {
        const message = `${name} is already in contacts`;
        alert(message);
        setName('');
        setNumber('');

        return;
      }
      dispatch(contactsOperations.addContact(name, number));
      setName('');
      setNumber('');
    },
    [dispatch, allContacts, name, number],
  );

  return (
    <section>
      <h1>Add new contact</h1>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        <label className={style.labelItem}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label className={style.labelItem}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={style.btn}>
          Add contact{' '}
        </button>
      </form>
    </section>
  );
}

ContactForm.propsTypes = {
  onSubmit: PropTypes.func.isRequired,
};
