import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

class ContactForm extends Component {
  static propsTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const existingName = this.props.state.contacts.items.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (!existingName) {
      this.props.onSubmit(name, number);
      this.setState({ name: '', number: '' });
      return;
    }
    const message = `${name} is already in contacts`;
    alert(message);
  };

  render() {
    return (
      <section>
        <h1>Add new contact</h1>
        <form className={style.contactForm} onSubmit={this.handleSubmit}>
          <label className={style.labelItem}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
          </label>
          <label className={style.labelItem}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
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
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
