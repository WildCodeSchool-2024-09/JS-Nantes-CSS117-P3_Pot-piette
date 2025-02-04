// Types of ConnectedProvider
import type { ReactNode } from "react";

export type Children = {
  children: ReactNode;
};
export type ConnectedProps = {
  connected: boolean;
  setConnected: (value: boolean) => void;
};
