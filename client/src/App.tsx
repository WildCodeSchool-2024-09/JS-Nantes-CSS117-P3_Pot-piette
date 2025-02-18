import { Outlet } from "react-router-dom";
import "./App.css";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AuthContext } from "./contexts/AuthContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const { setIsAdmin } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/whoami", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setIsAdmin(!!data.isAdmin);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur", error);
      }
    };

    fetchUserData();
  }, [setIsAdmin]);

  return (
    <AuthProvider>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
