import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./BurgerMenu.scss";

const BurgerMenu = ({ isOpen, toggleBurgerMenu }) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleBurgerMenu}>
      <div className="menuBurger">
        <div className="menuBurger__nav">
          <div className="menuBurger__nav__close" onClick={toggleBurgerMenu}>
            <CloseIcon className="menuBurger__nav__close__icon" />
          </div>
          <a href="#" className="header__link header__link__first">
            Пункт меню
          </a>
          <a href="#" className="header__link">
            Пункт меню
          </a>
          <a href="#" className="header__link">
            Пункт меню
          </a>
          <a href="#" className="header__link">
            Пункт меню
          </a>
        </div>
        <button className="header__button">Оставить заявку</button>
      </div>
    </Drawer>
  );
};

export default BurgerMenu;
