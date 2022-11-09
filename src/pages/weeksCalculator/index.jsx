import { useLocation } from "react-router-dom";

const WeeksCalculator = () => {
  const { state } = useLocation();
  return (
    <div>
      <p>{`oneWeek = ${state?.oneWeek}`}</p>
      <p>{`twoWeek = ${state?.twoWeek}`}</p>
      <p>{`threeWeek = ${state?.threeWeek}`}</p>
      <p>{`fourWeek = ${JSON.stringify(state?.fourWeek)}`}</p>
      <p>{`fiveWeek = ${state?.fiveWeek}`}</p>
      <p>{`sixWeek = ${state?.sixWeek}`}</p>
      <p>{`sevenWeek = ${state?.sevenWeek}`}</p>
      <p>{`eightWeek = ${JSON.stringify(state?.eightWeek)}`}</p>
      <p>{`nineWeek = ${JSON.stringify(state?.nineWeek)}`}</p>
      <p>{`tenWeek = ${JSON.stringify(state?.tenWeek)}`}</p>
    </div>
  );
};

export default WeeksCalculator;
