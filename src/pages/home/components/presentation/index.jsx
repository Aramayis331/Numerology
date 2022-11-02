import "./Presentation.scss";
import sectionOneArrow from "assets/sectionOneArrow.png";
import vk from "assets/vk.png";
const Presentation = () => {
  return (
    <section className="section__one">
      <div className="section__one__cart">
        <h1 className="section__one__cart__title">Нумеролог</h1>
        <p className="section__one__cart__subtTitle">Юлия Спирина</p>
        <p className="section__one__cart__help">
          Разобраться в себе, чтобы понять свои скрытые
          <br />
          способности и найти своё призвание в жизни
        </p>
        <div className="section__one__footer">
          <button className="section__one__footer__button">
            Купить курс за 1 руб
            <img
              src={sectionOneArrow}
              alt="arrow"
              className="section__one__footer__button__icon"
            />
          </button>
          <div className="section__one__footer__telegram">
            <img src={vk} alt="vk" className="section__one__footer__iconVK" />
            <p className="section__one__footer__telegram__text">
              Написать в Telegram
            </p>
          </div>
        </div>
      </div>
      <div className="section__one__background">
        <div className="section__one__background__img"></div>
      </div>
    </section>
  );
};

export default Presentation;
