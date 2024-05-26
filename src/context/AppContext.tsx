import { combineComponents } from "src/components/combineComponents";
import { AlertProvider } from "./AlertContext";
import { AuthProvider } from "./AuthContext";
import { BoardProvider } from "./BoardContext";

const providers = [AlertProvider, AuthProvider, BoardProvider];

export const AppProvider = combineComponents(...providers);
