import { useState } from "react";
import "./InputDate.scss";

const InputDate = () => {
  const [date, setDate] = useState("DD/MM/YYYY");
  const handleChange = (newValue) => setDate(newValue);
  console.log(date.split("-"), "date");
  return (
    <input
      className="input__date"
      type="date"
      name="birth"
      onChange={(e) => handleChange(e.target.value)}
      value={date}
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
    />
  );
};
export default InputDate;
