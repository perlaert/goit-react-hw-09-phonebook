import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../routes';
import authSelectors from '../../redux/auth/auth-selectors';
import style from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => {
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
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
