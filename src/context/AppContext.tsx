import { combineComponents } from "src/components/combineComponents";
import { AlertProvider } from "./AlertContext";
import { AuthProvider } from "./AuthContext";
import { BoardProvider } from "./BoardContext";
import { ThemeProvider } from './ThemeContext';
import { SidebarProvider } from "./SidebarContext";

const providers = [
  AlertProvider,
  AuthProvider,
  BoardProvider,
  ThemeProvider,
  SidebarProvider
];

export const AppProvider = combineComponents(...providers);
