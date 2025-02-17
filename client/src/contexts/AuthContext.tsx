import { type ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AuthProviderI {
  isLogged: boolean;
}

export const AuthContext = createContext<AuthProviderI>({ isLogged: false });

// Placer les types ReactNode et AuthProviderI dans un fichier à part

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  toast.error("Vous n'avez pas accès");

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Tu n'es pas enregistré ! Connecte-toi !");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/verify`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.ok) {
        setIsLogged(true);
      } else {
        toast.error("Tu n'es pas enregistré ! Connecte-toi !");
      }
    } catch (err) {
      console.warn("Voici l'erreur :", err);
    }
  }
  return (
    <AuthContext.Provider value={{ isLogged }}>{children}</AuthContext.Provider>
  );
};
