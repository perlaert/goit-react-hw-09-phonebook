import { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

class ContactList extends Component {
  static propsTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { items, onDeleteContact } = this.props;

    return (
      <section>
        {items.length !== 0 ? (
          <ul className={style.contactsList}>
            {items.map(({ id, name, number }) => (
              <li key={id} className={style.contactItem}>
                <div className={style.contactInfo}>
                  <p className={style.contactName}>{name}:</p>
                  <p>{number}</p>
                </div>
                <button
                  className={style.btn}
                  type="button"
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Phonebook is empty</p>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  items: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchtoProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(ContactList);
