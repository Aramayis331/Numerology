import "./Invitation.scss";
import sectionThreeBackground from "assets/sectionThreeBackground.png";
const Invitation = () => {
  return (
    <section className="section__three">
      <div className="section__three__header">
        <h2 className="section__three__header__title">
          Я приглашаю тебя на свой авторский курс <br />
          по прокачке энергий «трансформация»
        </h2>
        <p className="section__three__header__subTitle">
          Уникальная система конкретных действий
        </p>
      </div>
      <div className="section__three__container">
        <p className="section__three__container__title">
          Что человек получает после работы со мной
        </p>
        <div className="section__three__container__center">
          <div className="section__three__container__start">
            <p className="section__three__container__text section__three__container__text__first">
              Появляется понимание своих сильных качеств и талантов, понимание
              своих слабых сторон и знания как можно их прокачать.
            </p>
            <p className="section__three__container__text">
              Появляется уверенность в себе и в завтрашнем дне. видит причины
              своих неудач.
            </p>
          </div>
          <div className="section__three__container__end">
            <p className="section__three__container__text section__three__container__text__first">
              Умение видеть и не упускать возможности, которые раньше не
              замечали, возможность найти дело по душе которое будет радовать и
              приносить желанный доход.
            </p>
            <p className="section__three__container__text">
              Меняет мышление на позитивное, притягивает благоприятные
              возможности, (становится счастливее убираем), дописываем после
              возможностей - деньги, любовь, удачу, легкость, гармонию
            </p>
          </div>
          <img
            src={sectionThreeBackground}
            alt="noPhoto"
            className="section__three__container__img"
          />
          <div className="section__three__container__background"></div>
        </div>
      </div>
    </section>
  );
};
export default Invitation;
