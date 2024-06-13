import { combineComponents } from "src/components/combineComponents";
import { AlertProvider } from "./AlertContext";
import { AuthProvider } from "./AuthContext";
import { BoardProvider } from "./BoardContext";
import { ThemeProvider } from './ThemeContext';

const providers = [
  AlertProvider,
  AuthProvider,
  BoardProvider,
  ThemeProvider,
];

export const AppProvider = combineComponents(...providers);
