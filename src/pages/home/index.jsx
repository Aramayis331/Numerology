import Reviews from "./components/reviews";
import Presentation from "./components/presentation";
import Questions from "./components/questions";
import Invitation from "./components/invitation";
import Weeks from "./components/weeks";
import Explain from "./components/explain";
import Сause from "./components/cause";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Presentation />
      <Questions />
      <Invitation />
      <Explain />
      <Weeks />
      <Сause />
      <Reviews />
      <Outlet />
    </>
  );
};

export default Home;
