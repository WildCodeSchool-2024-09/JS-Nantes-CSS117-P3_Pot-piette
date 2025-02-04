import { createContext, useState } from "react";
import type { Children, ConnectedProps } from "../types/context";

export const ConnectedContext = createContext<ConnectedProps | null>(null);

export default function ConnectedProvider({ children }: Children) {
  const [connected, setConnected] = useState(false);

  return (
    <ConnectedContext.Provider value={{ connected, setConnected }}>
      {children}
    </ConnectedContext.Provider>
  );
}
