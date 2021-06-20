import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOpetations from '../../redux/auth/auth-operations';
import PropTypes from 'prop-types';
import style from '../../components/ContactForm/ContactForm.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      dispatch(authOpetations.signUp({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <section>
      <h1>Sign up to Phonebook App</h1>
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
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={style.labelItem}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className={style.btn}>
          Sign up{' '}
        </button>
      </form>
    </section>
  );
}

RegisterPage.propsTypes = {
  onSubmit: PropTypes.func.isRequired,
};
