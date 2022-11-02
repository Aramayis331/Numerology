import "./Header.scss";
import logo from "assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import BurgerMenu from "./components/burgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => setIsOpen((prev) => !prev);

  return (
    <header>
      <nav>
        <p className="header__number">+ 7999 099 99 81</p>
        <a href="#" className="header__link">
          Пункт меню
        </a>
        <a href="#" className="header__link">
          Пункт меню
        </a>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <a href="#" className="header__link">
          Пункт меню
        </a>
        <a href="#" className="header__link">
          Пункт меню
        </a>
        <button className="header__button">Оставить заявку</button>
      </nav>
      <div className="burger__logo">
        <img src={logo} alt="logo" />
      </div>
      <button className="burger" onClick={toggleBurgerMenu}>
        <MenuIcon className="burger__icon" />
      </button>
      <BurgerMenu isOpen={isOpen} toggleBurgerMenu={toggleBurgerMenu} />
    </header>
  );
};

export default Header;
