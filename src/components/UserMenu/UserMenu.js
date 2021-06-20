import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import defaultImg from '../../images/default-avatar.jpg';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import style from './UserMenu.module.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserEmail);

  const dispatch = useDispatch();

  const onSingout = useCallback(
    () => dispatch(authOperations.signOut()),
    [dispatch],
  );

  return (
    <div className={style.userMenu}>
      <div className={style.persInfo}>
        <img src={defaultImg} alt="" width="32" className={style.avatar} />
        <span className={style.email}>{email}</span>
      </div>
      <button type="button" onClick={onSingout} className={style.btn}>
        <ExitToAppIcon />
      </button>
    </div>
  );
}
