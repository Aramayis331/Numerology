import { useLocation } from "react-router-dom";

const WeeksCalculator = () => {
  const { state } = useLocation();
  return (
    <div>
      <p>
        <span style={{ fontWeight: 900 }}>oneWeek</span>
        {` = ${state?.oneWeek}`}
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>twoWeek</span>
        {` = ${state?.twoWeek}`}
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>threeWeek</span>
        {` = ${state?.threeWeek}`}
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>fourWeek</span>
        {` = {
       oneTalent = ${state?.fourWeek?.oneTalent}
       twoTalent = ${state?.fourWeek?.twoTalent}
       threeTalent = ${state?.fourWeek?.threeTalent}
      }`}
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>fiveWeek</span>
        {` = ${state?.fiveWeek}`}
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>sixWeek</span>
        {` = ${state?.sixWeek}`}
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>sevenWeek</span>
        {` = ${state?.sevenWeek}`}
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>eightWeek</span>
        {` = {
        eightWeekOne = ${state?.eightWeek?.eightWeekOne}
        eightWeekTwo = ${state?.eightWeek?.eightWeekTwo}
        eightWeekTree = ${state?.eightWeek?.eightWeekTree}
      }`}
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>nineWeek</span>
        {` = {
        nineWeekOne = ${state?.nineWeek?.nineWeekOne}
        nineWeekTwo = ${state?.nineWeek?.nineWeekTwo}
        nineWeekTree = ${state?.nineWeek?.nineWeekTree}
      }`}
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>tenWeek</span>
        {` = {
        tenWeekOne = ${state?.tenWeek?.tenWeekOne}
        tenWeekTwo = ${state?.tenWeek?.tenWeekTwo}
        tenWeekTree = ${state?.tenWeek?.tenWeekTree}
        tenWeekFour = ${state?.tenWeek?.tenWeekFour}
        tenWeekFiv = ${state?.tenWeek?.tenWeekFiv}
        tenWeekSix = ${state?.tenWeek?.tenWeekSix}
      }`}
      </p>
    </div>
  );
};

export default WeeksCalculator;
