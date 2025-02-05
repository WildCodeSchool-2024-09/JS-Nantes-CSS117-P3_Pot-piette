import { useContext } from "react";
import { ConnectedContext } from "../contexts/ConnectedProvider";

function useConnected() {
  const context = useContext(ConnectedContext);

  if (!context) {
    throw new Error(" Vous n'êtes pas connecté");
  }
  return context;
}
export default useConnected;
