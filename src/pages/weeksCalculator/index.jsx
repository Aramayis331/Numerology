import { useLocation } from "react-router-dom";

const WeeksCalculator = () => {
  const { state } = useLocation();
  return (
    <div>
      <p>{`oneWeek = ${state?.oneWeek}`}</p>
      <p>{`twoWeek = ${state?.twoWeek}`}</p>
      <p>{`threeWeek = ${state?.threeWeek}`}</p>
      <p>{`fourWeek = {
       oneTalent = ${state?.fourWeek?.oneTalent}
       twoTalent = ${state?.fourWeek?.twoTalent}
       threeTalent = ${state?.fourWeek?.threeTalent}
      }`}</p>
      <p>{`fiveWeek = ${state?.fiveWeek}`}</p>
      <p>{`sixWeek = ${state?.sixWeek}`}</p>
      <p>{`sevenWeek = ${state?.sevenWeek}`}</p>
      <p>{`eightWeek = {
        eightWeekOne = ${state?.eightWeek?.eightWeekOne}
        eightWeekTwo = ${state?.eightWeek?.eightWeekTwo}
        eightWeekTree = ${state?.eightWeek?.eightWeekTree}
      }`}</p>
      <p>{`nineWeek = {
        nineWeekOne = ${state?.nineWeek?.nineWeekOne}
        nineWeekTwo = ${state?.nineWeek?.nineWeekTwo}
        nineWeekTree = ${state?.nineWeek?.nineWeekTree}
      }`}</p>
      <p>{`tenWeek = {
        tenWeekOne = ${state?.tenWeek?.tenWeekOne}
        tenWeekTwo = ${state?.tenWeek?.tenWeekTwo}
        tenWeekTree = ${state?.tenWeek?.tenWeekTree}
        tenWeekFour = ${state?.tenWeek?.tenWeekFour}
        tenWeekFiv = ${state?.tenWeek?.tenWeekFiv}
        tenWeekSix = ${state?.tenWeek?.tenWeekSix}
      }`}</p>
    </div>
  );
};

export default WeeksCalculator;
