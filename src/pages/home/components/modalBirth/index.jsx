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
    let oneWeek = date.birth.split("-")[2];
    let twoWeek = date.birth.split("-")[1];
    let threeWeek = date.birth.split("-")[0];
    let oneTalent;
    let twoTalent;
    let threeTalent;
    let fourWeek = {
      oneTalent,
      twoTalent,
      threeTalent,
    };
    let fiveWeek;
    let sixWeek;
    let sevenWeek;
    let eightWeekOne;
    let eightWeekTwo;
    let eightWeekTree;
    let eightWeek = {
      eightWeekOne,
      eightWeekTwo,
      eightWeekTree,
    };
    let nineWeekOne;
    let nineWeekTwo;
    let nineWeekTree;
    let nineWeek = {
      nineWeekOne,
      nineWeekTwo,
      nineWeekTree,
    };
    let tenWeekOne;
    let tenWeekTwo;
    let tenWeekTree;
    let tenWeekFour;
    let tenWeekFiv;
    let tenWeekSix;
    let squareOne;
    let squareTwo;
    let squareTree;
    let squareFour;
    let tenWeek = {
      tenWeekOne,
      tenWeekTwo,
      tenWeekTree,
      tenWeekFour,
      tenWeekFiv,
      tenWeekSix,
    };
    let rotateFour;
    let rotateFourOne;
    let rotateFourTwo;
    let center;

    // oneWeek twoWeek threeWeek //
    if (Number(oneWeek > 22)) {
      oneWeek = Number(oneWeek[0]) + Number(oneWeek[1]);
    } else if (Number(oneWeek[0]) === 0) {
      oneWeek = oneWeek[1];
    }
    if (Number(twoWeek[0]) === 0) {
      twoWeek = Number(twoWeek[1]);
    }
    if (Number(threeWeek) > 22) {
      while (Number(threeWeek) > 22) {
        if (threeWeek.toString().length === 4) {
          threeWeek =
            Number(threeWeek[0]) +
            Number(threeWeek[1]) +
            Number(threeWeek[2]) +
            Number(threeWeek[3]);
        } else {
          threeWeek = threeWeek.toString();
          threeWeek = Number(threeWeek[0]) + Number(threeWeek[1]);
        }
      }
    }
    // oneWeek secondWeek threeWeek //

    rotateFour = Number(oneWeek) + Number(twoWeek) + Number(threeWeek);
    if (rotateFour > 22) {
      rotateFour = rotateFour.toString();
      rotateFour = Number(rotateFour[0]) + Number(rotateFour[1]);
    }
    center =
      Number(oneWeek) +
      Number(twoWeek) +
      Number(threeWeek) +
      Number(rotateFour);
    if (center > 22) {
      center = center.toString();
      center = Number(center[0]) + Number(center[1]);
    }
    oneTalent = Number(oneWeek) + Number(center);
    if (oneTalent > 22) {
      oneTalent = oneTalent.toString();
      oneTalent = Number(oneTalent[0]) + Number(oneTalent[1]);
    }
    threeTalent = Number(twoWeek) + Number(center);
    if (threeTalent > 22) {
      threeTalent = threeTalent.toString();
      threeTalent = Number(threeTalent[0]) + Number(threeTalent[1]);
    }
    twoTalent = Number(oneTalent) + Number(threeTalent);
    if (twoTalent > 22) {
      twoTalent = twoTalent.toString();
      twoTalent = Number(twoTalent[0]) + Number(twoTalent[1]);
    }
    fourWeek = {
      oneTalent,
      twoTalent,
      threeTalent,
    };
    rotateFourTwo = Number(rotateFour) + Number(center);
    if (rotateFourTwo > 22) {
      rotateFourTwo = rotateFourTwo.toString();
      rotateFourTwo = Number(rotateFourTwo[0]) + Number(rotateFourTwo[1]);
    }
    rotateFourOne = Number(rotateFour) + Number(rotateFourTwo);
    if (rotateFourOne > 22) {
      rotateFourOne = rotateFourOne.toString();
      rotateFourOne = Number(rotateFourOne[0]) + Number(rotateFourOne[1]);
    }
    fiveWeek = Number(threeWeek) + Number(center);
    if (fiveWeek > 22) {
      fiveWeek = fiveWeek.toString();
      fiveWeek = Number(fiveWeek[0]) + Number(fiveWeek[1]);
    }
    sevenWeek = Number(fiveWeek) + Number(rotateFourTwo);
    if (sevenWeek > 22) {
      sevenWeek = sevenWeek.toString();
      sevenWeek = Number(sevenWeek[0]) + Number(sevenWeek[1]);
    }
    sixWeek = Number(fiveWeek) + Number(sevenWeek);
    if (sixWeek > 22) {
      sixWeek = sixWeek.toString();
      sixWeek = Number(sixWeek[0]) + Number(sixWeek[1]);
    }
    eightWeekOne = rotateFourTwo;
    eightWeekTree = sevenWeek;
    eightWeekTwo = Number(eightWeekOne) + Number(eightWeekTree);
    if (eightWeekTwo > 22) {
      eightWeekTwo = eightWeekTwo.toString();
      eightWeekTwo = Number(eightWeekTwo[0]) + Number(eightWeekTwo[1]);
    }
    eightWeek = {
      eightWeekOne,
      eightWeekTwo,
      eightWeekTree,
    };
    nineWeekOne = rotateFour;
    nineWeekTwo = rotateFourOne;
    nineWeekTree = rotateFourTwo;
    nineWeek = {
      nineWeekOne,
      nineWeekTwo,
      nineWeekTree,
    };
    tenWeekOne = Number(twoWeek) + Number(rotateFour);
    if (tenWeekOne > 22) {
      tenWeekOne = tenWeekOne.toString();
      tenWeekOne = Number(tenWeekOne[0]) + Number(tenWeekOne[1]);
    }
    tenWeekTwo = Number(oneWeek) + Number(threeWeek);
    if (tenWeekTwo > 22) {
      tenWeekTwo = tenWeekTwo.toString();
      tenWeekTwo = Number(tenWeekTwo[0]) + Number(tenWeekTwo[1]);
    }
    tenWeekTree = Number(tenWeekOne) + Number(tenWeekTwo);
    if (tenWeekTree > 22) {
      tenWeekTree = tenWeekTree.toString();
      tenWeekTree = Number(tenWeekTree[0]) + Number(tenWeekTree[1]);
    }
    squareOne = Number(oneWeek) + Number(twoWeek);
    if (squareOne > 22) {
      squareOne = squareOne.toString();
      squareOne = Number(squareOne[0]) + Number(squareOne[1]);
    }
    squareTwo = Number(twoWeek) + Number(threeWeek);
    if (squareTwo > 22) {
      squareTwo = squareTwo.toString();
      squareTwo = Number(squareTwo[0]) + Number(squareTwo[1]);
    }
    squareTree = Number(threeWeek) + Number(rotateFour);
    if (squareTree > 22) {
      squareTree = squareTree.toString();
      squareTree = Number(squareTree[0]) + Number(squareTree[1]);
    }
    squareFour = Number(rotateFour) + Number(oneWeek);
    if (squareFour > 22) {
      squareFour = squareFour.toString();
      squareFour = Number(squareFour[0]) + Number(squareFour[1]);
    }
    tenWeekFour = Number(squareOne) + Number(squareTree);
    if (tenWeekFour > 22) {
      tenWeekFour = tenWeekFour.toString();
      tenWeekFour = Number(tenWeekFour[0]) + Number(tenWeekFour[1]);
    }
    tenWeekFiv = Number(squareTwo) + Number(squareFour);
    if (tenWeekFiv > 22) {
      tenWeekFiv = tenWeekFiv.toString();
      tenWeekFiv = Number(tenWeekFiv[0]) + Number(tenWeekFiv[1]);
    }
    tenWeekSix = Number(tenWeekFour) + Number(tenWeekFiv);
    if (tenWeekSix > 22) {
      tenWeekSix = tenWeekSix.toString();
      tenWeekSix = Number(tenWeekSix[0]) + Number(tenWeekSix[1]);
    }
    tenWeek = {
      tenWeekOne,
      tenWeekTwo,
      tenWeekTree,
      tenWeekFour,
      tenWeekFiv,
      tenWeekSix,
    };
    navigate("/weeks", {
      state: {
        oneWeek,
        twoWeek,
        threeWeek,
        fourWeek,
        fiveWeek,
        sixWeek,
        sevenWeek,
        eightWeek,
        nineWeek,
        tenWeek,
      },
    });
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
