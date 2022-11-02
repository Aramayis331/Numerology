import "./Сause.scss";
import sectionOneArrow from "assets/sectionOneArrow.png";
import sectionSixBottom from "assets/sectionSixBottom.png";
import sectionSixBackground from "assets/sectionSixBackground.png";
import sectionSixumbrella from "assets/sectionSixumbrella.png";
import sectionSixHeart from "assets/sectionSixHeart.png";
import sectionSixTopTwo from "assets/sectionSixTopTwo.png";
import sectionSixTopOne from "assets/sectionSixTopOne.png";
import sectionSixTopItem from "assets/sectionSixTopItem.png";

const Сause = () => {
  return (
    <section className="section__six">
      <div className="section__six__top">
        <div className="section__six__top__left">
          <p className="section__six__top__left__title">
            Зачем я занимаюсь нумерологией:
          </p>
          <div className="section__six__top__left__content">
            <div className="section__six__top__left__content__itemOne">
              <img src={sectionSixTopItem} alt="noPhoto" />
              <p className="section__six__top__left__content__itemOne__text">
                чтобы помогать людям становится счастливее, успешнее, богаче,
                Чтобы они научились видеть возможности для заработка везде, и
                использовали их.
              </p>
            </div>
            <div className="section__six__top__left__content__itemTwo">
              <img
                src={sectionSixTopOne}
                alt="noPhoto"
                className="section__six__top__left__content__itemTwo__img"
              />
              <img src={sectionSixTopTwo} alt="noPhoto" />
            </div>
          </div>
        </div>
        <div className="section__six__top__right">
          <div className="section__six__top__right__itemOne">
            <img src={sectionSixHeart} alt="noPhoto" />
            <p className="section__six__top__right__item__text">
              Чтобы они жили в гармонии с собой, работали в кайф на любимой
              работе, в гармонии с миром и своими энергиями, научились слышать
              себя.
            </p>
          </div>
          <div className="section__six__top__right__itemTwo">
            <img src={sectionSixumbrella} alt="noPhoto" />
            <p className="section__six__top__right__item__text">
              чтобы люди активировали свои таланты, поняли на что на самом деле
              способны, освободились от тормозов и блоков, которые мешают найти
              дело мечты, расслабились и стали жить с мыслью: «Я на своём месте»
            </p>
          </div>
          <button className="section__six__top__right__item__button">
            Купить курс за 1 руб
            <img
              src={sectionOneArrow}
              alt="arrow"
              className="section__one__footer__button__icon"
            />
          </button>
        </div>
        <div className="section__six__top__backgorund">
          <img
            src={sectionSixBackground}
            alt="noPhoto"
            className="section__six__top__backgorund__img"
          />
        </div>
      </div>
      <div className="section__six__bottom">
        <div className="section__six__bottom__cart">
          "Чем же так хорошая твоя нумерология?"-часто слышу я вопрос.
          Представьте, что вам нужно добраться из точки А в точку Б, но вы не
          знаете дороги. Ваш путь будет долгим, он будет петлять, и в пункт
          назначения вы прибудете ой как нескоро, если вообще доберетесь. Теперь
          представьте, как быстро вы туда попадете, если используете навигатор.
          Так вот, нумерология для человека своего рода навигатор, путеводная
          звездочка, свет маяка в темноте ночи. Она поможет вам добраться в
          желаемую точку быстро и легко. Так чем же хороша нумерология?) Не
          узнаете, пока не попробуете)
        </div>
        <img
          src={sectionSixBottom}
          alt="noPhoto"
          className="section__six__bottom__img"
        />
      </div>
    </section>
  );
};

export default Сause;
