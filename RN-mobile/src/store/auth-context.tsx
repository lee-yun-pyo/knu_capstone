import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authToken, setAuthToken] = useState("");

  async function authenticate(token: string) {
    setAuthToken(token);
    await AsyncStorage.setItem("token", token);
  }

  async function logout() {
    setAuthToken("");
    await AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    isAuthenticated: authToken !== "",
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
