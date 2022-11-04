import Modal from "components/modal";
import { useNavigate } from "react-router-dom";
import "./ModalBirth.scss";

const ModalBirth = () => {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
  };
  return (
    <Modal onClose={closeModal}>
      <div className="modal__birth">
        <input type="date" name="test" />
        <p className="modal__birth__title">Напишите свою дату</p>
        <p className="modal__birth__subTitle">
          рождения и получите первый анализ
        </p>
        <form
          className="modal__birth__form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <p className="modal__birth__form__title">Дата рождения</p>
          <input
            className="modal__birth__form__date"
            type="date"
            name="birth"
          />
          <button className="modal__birth__form__button" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </Modal>
  );
};
export default ModalBirth;
