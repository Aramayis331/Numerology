import Home from "pages/home";
import ModalBirth from "pages/home/components/modalBirth";
import WeeksCalculator from "pages/weeksCalculator";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="birth" element={<ModalBirth />} />
      </Route>
      <Route path="/weeks" element={<WeeksCalculator />} />
    </Routes>
  );
};

export default Routers;
