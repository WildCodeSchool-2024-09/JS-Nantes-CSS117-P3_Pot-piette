import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DetailRecipePage from "./pages/DetailRecipePage/DetailRecipePage";

function App() {
  return (
    <>
      <Header />
      <DetailRecipePage />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
