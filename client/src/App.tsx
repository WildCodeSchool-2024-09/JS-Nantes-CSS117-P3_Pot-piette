import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ConnectedProvider from "./contexts/ConnectedProvider";

function App() {
  return (
    <ConnectedProvider>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </ConnectedProvider>
  );
}

export default App;
