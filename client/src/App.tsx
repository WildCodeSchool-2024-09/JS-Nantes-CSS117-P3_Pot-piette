import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ConnectedProvider from "./contexts/ConnectedProvider";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <ConnectedProvider>
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer />
      </ConnectedProvider>
    </UserProvider>
  );
}

export default App;
