import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value = ' ', onChange }) => {
  return (
    <div className={style.filterSection}>
      <label>
        Find contacts by name
        <input
          className={style.filterInput}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
