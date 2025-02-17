import { type ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate("/");
  }, [isLogged, navigate]);

  return isLogged ? children : null;
}

export default ProtectedRoute;
