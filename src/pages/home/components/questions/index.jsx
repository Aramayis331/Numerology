import "./Questions.scss";
import sectionTwoBackgorund from "assets/sectionTwoBackgorund.png";
import circle from "assets/circle.png";
import vk from "assets/vk.png";
import sectionTwoCenter from "assets/sectionTwoCenter.png";
import sectionOneArrow from "assets/sectionOneArrow.png";
const Questions = () => {
  return (
    <section className="section__two">
      <div className="section__two__left">
        <div className="section__two__left__header">
          <img
            src={circle}
            alt="noPhoto"
            className="section__two__left__header__img"
          />
          <div className="section__two__left__header__content">
            <p className="section__two__left__header__content__title">
              Как часто вы
            </p>
            <p className="section__two__left__header__content__subTitle">
              прокручиваете
            </p>
            <p className="section__two__left__header__content__subTitle">
              в голове эти вопросы?
            </p>
          </div>
        </div>
        <p className="section__two__left__content__text">Где заработать больше?</p>
        <p className="section__two__left__content__text">
          Зачем я родился?
          <br />
          Тем ли я занимаюсь?
        </p>
        <p className="section__two__left__content__text">Как вырасти в доходе?</p>
        <p className="section__two__left__content__bottom__text">
          я ненавижу свою работу!
          <br />
          стоит ли на ней <br />
          оставаться?
        </p>
        <div className="section__two__footer section__two__footer__hidde">
          <div className="section__one__footer__telegram">
            <img src={vk} alt="vk" className="section__one__footer__iconVK" />
            <p className="section__one__footer__telegram__text">
              Написать в Telegram
            </p>
          </div>
          <button className="section__two__footer__button">
            Купить курс за 1 руб
            <img
              src={sectionOneArrow}
              alt="arrow"
              className="section__one__footer__button__icon"
            />
          </button>
        </div>
      </div>
      <div className="section__two__center">
        <div className="section__two__center__container">
          <img
            src={sectionTwoCenter}
            alt="noPhoto"
            className="section__two__center__container__img"
          />
          <img src={sectionTwoBackgorund} alt="noPhoto" />
        </div>
      </div>
      <div className="section__two__right">
        <div className="section__two__right__rowOne">
          <p className="section__two__right__rowOne__text">
            Почему я стою на месте и не могу продвинуться вперед?
          </p>
          <div className="section__two__right__rowOne__img section__two__right__rowOne__img__responsive">
            <p className="section__two__right__img__text">
              А вдруг у меня
              <br className="section__two__left__content__text__br" />
              не получится?
            </p>
          </div>
        </div>
        <p className="section__two__right__rowTwo">
          Какая профессия подходит мне по дате рождения?
        </p>
        <div className="section__two__right__rowThree">
          <p className="section__two__right__img__text section__two__right__img__text__hidde">
            Я ничего не умею и у меня нет талантов
          </p>
          <div className="section__two__right__rowThree__img">
            <p className="section__two__right__img__text">
              Пашу на двух работах,
              <br className="section__two__left__content__text__br" />
              работаю много, а
              <br className="section__two__left__content__text__br" />
              денег нет, а другие
              <br className="section__two__left__content__text__br" />
              ничего не делают и
              <br className="section__two__left__content__text__br" />
              гребут деньги лопатой
            </p>
          </div>
        </div>
        <p className="section__two__right__rowTwo section__two__right__rowTwo__hidde">
          Я ничего не умею и у меня нет талантов
        </p>
        <div className="section__two__right__rowFour">
          <p className="section__two__right__rowFour__text">
            Почему мне не везет в личной жизни?
          </p>
          <div className="section__two__right__rowFour__img">
            <p className="section__two__right__img__text">
              Моя жизнь проходит,
              <br className="section__two__left__content__text__br" />
              а я так и не нашел свой
              <br className="section__two__left__content__text__br" />
              путь, свое призвание
            </p>
          </div>
        </div>
        <div className="section__two__footer">
          <div className="section__one__footer__telegram">
            <img src={vk} alt="vk" className="section__one__footer__iconVK" />
            <p className="section__one__footer__telegram__text">
              Написать в Telegram
            </p>
          </div>
          <button className="section__two__footer__button">
            Купить курс за 1 руб
            <img
              src={sectionOneArrow}
              alt="arrow"
              className="section__one__footer__button__icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
