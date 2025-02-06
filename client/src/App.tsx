import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ConnectedProvider from "./contexts/ConnectedProvider";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <ConnectedProvider>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ConnectedProvider>
    </UserProvider>
  );
}

export default App;
