import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import style from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <div className={style.content}>
        <AppBar />
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
