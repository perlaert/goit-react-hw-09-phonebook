import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = useCallback(
    event => dispatch(contactsActions.changeFilter(event.target.value)),
    [dispatch],
  );

  const value = useSelector(contactsSelectors.getFilter);

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
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
