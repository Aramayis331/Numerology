import "./Footer.scss";
import logo from "assets/logo.png";
import sectionOneArrow from "assets/sectionOneArrow.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <p className="header__number header__number__hide">+ 7999 099 99 81</p>
        <a href="#" className="header__link">
          Пункт меню
        </a>
        <a href="#" className="header__link">
          Пункт меню
        </a>
        <div className="footer__top__logo">
          <img src={logo} alt="logo" />
        </div>
        <a href="#" className="header__link">
          Пункт меню
        </a>
        <a href="#" className="header__link">
          Пункт меню
        </a>
        <button className="footer__top__button footer__top__button__hide">
          Купить курс за 1 руб
          <img
            src={sectionOneArrow}
            alt="arrow"
            className="section__one__footer__button__icon"
          />
        </button>
      </div>
      <div className="footer__center__responisve">
        <p className="header__number">+ 7999 099 99 81</p>
        <button className="footer__top__button">
          Купить курс за 1 руб
          <img
            src={sectionOneArrow}
            alt="arrow"
            className="section__one__footer__button__icon"
          />
        </button>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom__text">
          2022. Копирайты - Нумеролог Юлия Спирина
        </p>
        <p className="footer__bottom__text">
          Политика обработки персональных данных
        </p>
      </div>
    </footer>
  );
};

export default Footer;
