import { type ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { AuthProviderI } from "../../src/types/context";

// AuthContext

export const AuthContext = createContext<AuthProviderI>({
  isLogged: false,
  isAdmin: false,
  login: () => {},
  logout: () => {},
  setIsAdmin: () => {},
  setIsLogged: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  async function checkLogin() {
    const token = localStorage.getItem("authToken");

    if (!token) {
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

      console.warn(response);

      if (response.ok) {
        setIsLogged(true);
      } else {
        toast.error("N'oublie pas de t'enregistrer");
      }
    } catch (err) {
      toast.error("Une erreur est survenue lors de la vérification.");
    }
  }

  const login = (token: string) => {
    localStorage.setItem("authToken", token);
    setIsLogged(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, login, logout, setIsAdmin, isAdmin, setIsLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};
