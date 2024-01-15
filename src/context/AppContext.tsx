import { combineComponents } from "src/components/combineComponents";
import { AlertProvider } from "./AlertContext";
import { AuthProvider } from "./AuthContext";

const providers = [AlertProvider, AuthProvider];

export const AppProvider = combineComponents(...providers);
