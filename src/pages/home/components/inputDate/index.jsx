import "./InputDate.scss";

const InputDate = ({ register }) => {
  return (
    <input
      className="input__date"
      type="date"
      min="1700-12-12"
      max="5555-12-12"
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
      placeholder="DD/MM/YYYY"
      {...register}
    />
  );
};
export default InputDate;
