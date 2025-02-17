import { createContext, useEffect, useState } from "react";

interface UserContextProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  login: (token: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined,
);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{ isAuthenticated, login, logout, isAdmin, setIsAdmin }}
    >
      {children}
    </UserContext.Provider>
  );
};
