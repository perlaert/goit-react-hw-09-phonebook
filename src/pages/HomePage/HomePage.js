import { useSelector } from 'react-redux';
import routes from '../../routes';
import authSelectors from '../../redux/auth/auth-selectors';

const styles = {
  link: {
    color: '#59719c',
  },
};

export default function HomePage() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <>
      <h1>
        Phonebook{' '}
        <span role="img" aria-label="Иконка телефонной книги">
          📱
        </span>
      </h1>
      <p>Save your contacts</p>
      {!isAuthenticated && (
        <div>
          <h2>Welcome, Guest!</h2>
          <p>
            You should{' '}
            <a href={routes.register} style={styles.link}>
              Sign up
            </a>{' '}
            or{' '}
            <a href={routes.login} style={styles.link}>
              Sign in
            </a>{' '}
            to use the App
          </p>
        </div>
      )}
    </>
  );
}
