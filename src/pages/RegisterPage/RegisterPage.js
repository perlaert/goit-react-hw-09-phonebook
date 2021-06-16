import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOpetations from '../../redux/auth/auth-operations';
import PropTypes from 'prop-types';
import style from '../../components/ContactForm/ContactForm.module.css';

class RegisterPage extends Component {
  static propsTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
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

    console.log(this.state);

    this.props.onSignUp(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <section>
        <h1>Sign up to Phonebook App</h1>
        <form className={style.contactForm} onSubmit={this.handleSubmit}>
          <label className={style.labelItem}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
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
            Sign up{' '}
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  onSignUp: authOpetations.signUp,
};

// const mapDispatchToProps = dispatch => ({
//   onSubmit: data => dispatch(authOpetations.register(data)),
// });

export default connect(null, mapDispatchToProps)(RegisterPage);
