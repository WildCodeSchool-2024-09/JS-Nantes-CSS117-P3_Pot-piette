// Types of ConnectedProvider
import type { ReactNode } from "react";

export type Children = {
  children: React.ReactNode;
};
export type ConnectedProps = {
  connected: boolean;
  setConnected: (value: boolean) => void;
};
export type ConnectedContext = {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export default ConnectedContext;
