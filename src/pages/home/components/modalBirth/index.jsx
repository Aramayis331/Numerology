import Modal from "components/modal";
import { useNavigate } from "react-router-dom";
import InputDate from "../inputDate";
import { useForm } from "react-hook-form";
import "./ModalBirth.scss";

const ModalBirth = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const closeModal = () => navigate("/");
  const resultCalculator = (date) => {
    let firstEnergy = date.birth.split("-")[2];
    let secondEnergy = date.birth.split("-")[1];
    let thirdEnergy = date.birth.split("-")[0];

    if (Number(firstEnergy) > 22) {
      firstEnergy = Number(firstEnergy[0]) + Number(firstEnergy[1]);
    } else if (Number(firstEnergy[0]) === 0) {
      firstEnergy = firstEnergy[1];
    }
    if (Number(secondEnergy[0]) === 0) {
      secondEnergy = Number(secondEnergy[1]);
    }
    if (Number(thirdEnergy) > 22) {
      while (Number(thirdEnergy) > 22) {
        if (thirdEnergy.toString().length === 4) {
          thirdEnergy =
            Number(thirdEnergy[0]) +
            Number(thirdEnergy[1]) +
            Number(thirdEnergy[2]) +
            Number(thirdEnergy[3]);
        } else {
          thirdEnergy = thirdEnergy.toString();
          thirdEnergy = Number(thirdEnergy[0]) + Number(thirdEnergy[1]);
        }
      }
    }
    alert(
      `
      firstEnergy = ${firstEnergy}
      secondEnergy = ${secondEnergy}
      thirdEnergy = ${thirdEnergy}
      `
    );
  };

  return (
    <Modal onClose={closeModal}>
      <div className="modal__birth">
        <p className="modal__birth__title">Напишите свою дату</p>
        <p className="modal__birth__subTitle">
          рождения и получите первый анализ
        </p>
        <form
          className="modal__birth__form"
          onSubmit={handleSubmit((data) => {
            resultCalculator(data);
          })}
        >
          <p className="modal__birth__form__title">Дата рождения</p>
          <InputDate
            register={{
              ...register("birth", {
                required: true,
                min: "1700-12-12",
                max: "5555-12-12",
              }),
            }}
          />
          <button
            disabled={!isValid}
            className={`modal__birth__form__button ${
              isValid ? "" : "modal__birth__form__button__disabled"
            }`}
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </Modal>
  );
};
export default ModalBirth;
