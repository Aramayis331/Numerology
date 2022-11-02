import "./Reviews.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { items } from "./data";

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section__seven">
      <div className="section__seven__header">
        <p className="section__seven__header__text">Отзывы</p>
      </div>
      <div className="slider">
        <Slider {...settings}>
          {items?.map(({ id, img }) => (
            <div key={id}>
              <div className="section__seven__content__item">
                <img
                  src={img}
                  alt="noPhoto"
                  className="section__seven__content__item__img"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
