import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class LoginPage extends Component {
  static propsTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleChange = ({ currentTarget: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSignIn(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <h1>Sign in to Phonebook App</h1>
        <form className={style.contactForm} onSubmit={this.handleSubmit}>
          <label className={style.labelItem}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label className={style.labelItem}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
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
}

const mapDispatchToProps = {
  onSignIn: authOperations.signIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
