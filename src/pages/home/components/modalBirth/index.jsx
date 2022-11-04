import Modal from "components/modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./ModalBirth.scss";

const ModalBirth = () => {
  const [date, setDate] = useState("M8888M/DD/Y888Y9");
  const navigate = useNavigate();

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
          <TextField
            id="date"
            type="date"
            format={"DD/MM/YYYY"}
            className="modal__birth__form__date"
            onChange={handleChange}
          />
          <input
            className="modal__birth__form__date"
            type="date"
            name="birth"
            date-format="yyyy-mm-dd"
            onChange={handleChange}
            value={date}
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
