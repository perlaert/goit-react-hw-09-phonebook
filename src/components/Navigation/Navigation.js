import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';
import authSelectors from '../../redux/auth/auth-selectors';
import style from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div>
      <nav>
        <NavLink
          exact
          to={routes.home}
          className={style.NavLink}
          activeClassName={style.NavLinkActive}
        >
          Home
        </NavLink>

        {isAuthenticated && (
          <NavLink
            to={routes.contacts}
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
}
