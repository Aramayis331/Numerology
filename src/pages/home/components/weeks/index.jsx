import "./Weeks.scss";
import sectionFiveEnd from "assets/sectionFiveEnd.png";
const Weeks = () => {
  return (
    <section className="section__five">
      <div className="section__five__left">
        <div className="section__five__left__item">
          <p className="section__five__left__item__number">1</p>
          <p className="section__five__left__item__text">НЕДЕЛЯ</p>
        </div>
        <div className="section__five__left__item">
          <p className="section__five__left__item__number">2</p>
          <p className="section__five__left__item__text">НЕДЕЛЯ</p>
        </div>
        <div className="section__five__left__item">
          <p className="section__five__left__item__number">3</p>
          <p className="section__five__left__item__text">НЕДЕЛЯ</p>
        </div>
        <div className="section__five__left__item">
          <p className="section__five__left__item__number">4</p>
          <p className="section__five__left__item__text">НЕДЕЛЯ</p>
        </div>
        <img
          src={sectionFiveEnd}
          alt="noPhoto"
          className="section__five__left__item__img"
        />
      </div>
      <div className="section__five__right">
        <div className="section__five__left__item__responsive section__five__left__item__hide">
          <p className="section__five__left__item__number">1</p>
          <p className="section__five__left__item__text">НЕДЕЛЯ</p>
        </div>
        <p className="section__five__right__text">
          Прокачаем энергию, заложенную числом рождения. Она отражает личностные
          характеристики, те качества, с которыми мы приходим в жизнь. Это то,
          кто я есть. Эта энергия будет сопровождать нас всю жизнь. Она может
          проживаться тобой как в плюсе, так и в минусе. С описанием энергии ты
          получишь список конкретных действия для прокачивания энергии, а так же
          список профессий, которые тебе подходят.
        </p>
        <div className="section__five__left__item__responsive section__five__left__item__hide">
          <p className="section__five__left__item__number">2</p>
          <p className="section__five__left__item__text">НЕДЕЛЯ</p>
        </div>
        <p className="section__five__right__text">
          Прокачиваем энергию заложенную месяцем рождения. Эта энергия отвечает
          за творчество, связь с ангелами-хранителями. Если энергия в плюсе —ты
          слушаещь свою интуицию, свой внутренний голос. С описанием ты получишь
          список конкретных действия для прокачивания энергии, а так же список
          профессий, которые тебе подходят.
        </p>
        <div className="section__five__left__item__responsive section__five__left__item__hide">
          <p className="section__five__left__item__number">3</p>
          <p className="section__five__left__item__text">НЕДЕЛЯ</p>
        </div>
        <p className="section__five__right__text">
          Прокачиваем энергию заложенную годом рождения. Эта энергия отображает
          то, к чему ты стремишься. Через нее приходит здоровье и деньги. С
          описанием ты получишь список конкретных действия для прокачивания
          энергий, а так же список профессий, которые тебе подходят.
        </p>
        <div className="section__five__left__item__responsive section__five__left__item__hide">
          <p className="section__five__left__item__number">4</p>
          <p className="section__five__left__item__text">НЕДЕЛЯ</p>
        </div>
        <p className="section__five__right__text">
          Прокачиваем энергии отвечающие за наши таланты (горловые чакры). У
          многих людей эти энергии не сильно проявлены в жизни, но если
          выполнять действия из моих рекомендаций, ты сможешь реализовать себя с
          совершенно новой стороны. С описанием ты получишь список конкретных
          действия для прокачивания энергий, а так же список профессий, которые
          тебе подходят.
        </p>
        <div className="section__five__left__item__responsive section__five__left__item__hide">
          <p className="section__five__left__item__number">
            5, 6 <span>и</span> 7
          </p>
          <p className="section__five__left__item__text">НЕДЕЛИ</p>
        </div>
        <p className="section__five__right__text">
          Учимся раскрывать свой денежный потенциал прокачивая канал денег.
          Именно энергии в этой точке матрицы могут подсказать, какие
          возможности тебя ждут, какие ошибки ты совершаешь, что блокирует
          приход денег в твою жизнь. С описанием ты получишь список конкретных
          действия для прокачивания энергий, а так же список профессий, которые
          тебе подходят.
        </p>
      </div>
    </section>
  );
};
export default Weeks;
