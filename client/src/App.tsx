import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ActivityPage from "./pages/ActivityPage/ActivityPage";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ActivityPage />
    </>
  );
}

export default App;
