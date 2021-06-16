import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './AuthNav.module.css';

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink
          to={routes.register}
          className={style.NavLink}
          activeClassName={style.NavLinkActive}
        >
          Sign up
        </NavLink>

        <NavLink
          to={routes.login}
          className={style.NavLink}
          activeClassName={style.NavLinkActive}
        >
          Sign in
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
