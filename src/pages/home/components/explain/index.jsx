import "./Explain.scss";
import sectionOneArrow from "assets/sectionOneArrow.png";
import sectionFourImgTwo from "assets/sectionFourImgTwo.png";
import sectionFourImgOne from "assets/sectionFourImgOne.png";
import { useNavigate } from "react-router-dom";
const Explain = () => {
  const navigate = useNavigate();
  const openModal = () => navigate("/birth");

  return (
    <section className="section__four">
      <div className="section__four__header">
        <p className="section__four__header__title">
          Сразу после оплаты наш умный калькулятор рассчитает твои энергии по
          дате рождения, пришлёт тебе описание и персональные задания на неделю
        </p>
        <div className="section__four__header__buttons">
          <button className="section__four__header__button" onClick={openModal}>
            Рассчитать на калькуляторе
          </button>
          <button className="section__four__kurs__button">
            Купить курс за 1 руб
            <img
              src={sectionOneArrow}
              alt="arrow"
              className="section__one__footer__button__icon"
            />
          </button>
        </div>
      </div>
      <div className="section__four__footer">
        <p className="section__four__footer__title">
          Программа трансформации по неделям
        </p>
        <div className="section__four__footer__imgs">
          <img
            src={sectionFourImgOne}
            alt="noPhoto"
            className="section__four__footer__imgs__one"
          />
          <img src={sectionFourImgTwo} alt="noPhoto" />
        </div>
      </div>
    </section>
  );
};
export default Explain;
