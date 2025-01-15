import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import AddRecipe5 from "./pages/AddRecipe/AddRecipe5";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <AddRecipe5 />
    </>
  );
}

export default App;
