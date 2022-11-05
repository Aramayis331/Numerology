import Modal from "components/modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModalBirth.scss";

const ModalBirth = () => {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  console.log(date, "date");
  const handleChange = (newValue) => setDate(newValue);
  const closeModal = () => navigate("/");

  return (
    <Modal onClose={closeModal}>
      <div className="modal__birth">
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
            onChange={(e) => handleChange(e.target.value)}
            value={date}
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
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
