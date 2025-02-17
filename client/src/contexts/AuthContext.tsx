import { type ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AuthProviderI {
  isLogged: boolean;
}

export const AuthContext = createContext<AuthProviderI>({ isLogged: false });

// Placer les types ReactNode et AuthProviderI dans un fichier à part

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("As-tu pensé à t'enrengistrer ?");
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
        toast.error("N'oublie pas de t'enrengistrer");
      }
    } catch (err) {}
  }
  return (
    <AuthContext.Provider value={{ isLogged }}>{children}</AuthContext.Provider>
  );
};
