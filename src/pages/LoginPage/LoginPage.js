import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import routes from '../../routes';
import authOperations from '../../redux/auth/auth-operations';
import PropTypes from 'prop-types';
import style from '../../components/ContactForm/ContactForm.module.css';

const s = {
  signIn_callout: {
    padding: '15px 20px',
    textAlign: 'center',
  },

  link: {
    color: '#59719c',
  },
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(event => {
    const { name, value } = event.currentTarget;

    switch (name) {
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

      dispatch(authOperations.signIn({ email, password }));

      setEmail('');
      setPassword('');
    },
    [dispatch, email, password],
  );

  return (
    <section>
      <h1>Sign in to Phonebook App</h1>
      <form className={style.contactForm} onSubmit={handleSubmit}>
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
          Sign in{' '}
        </button>
      </form>
      <p style={style.signIn_callout}>
        Don't have an account to Phonebook App?{' '}
        <a href={routes.register} style={s.link}>
          Create an account.
        </a>
      </p>
    </section>
  );
}

LoginPage.propsTypes = {
  onSubmit: PropTypes.func.isRequired,
};
