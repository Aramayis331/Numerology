import Footer from "./components/footer";
import Header from "./components/header";
import { ThemeProvider } from "@emotion/react";
import { theme } from "utils/theme";
import Routers from "routers";
function App() {
  return (
    <div className="wrapper">
      <ThemeProvider theme={theme}>
        <Header />
        <Routers />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
