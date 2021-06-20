import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <span className={style.copyRight}>
        © 2021 | All Rights Reserved | Developed by
        <a
          href="https://github.com/perlaert"
          target="_blank"
          rel="noopener norefferer noreferrer"
          aria-label="ссылка на GitHub"
        >
          GoIT Student
        </a>
      </span>
    </footer>
  );
};

export default Footer;
