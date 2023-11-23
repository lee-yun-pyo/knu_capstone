import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (isLogin: boolean) => {},
  logout: () => {},
});

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authToken, setAuthToken] = useState(false);

  async function authenticate(isLogin: boolean) {
    setAuthToken(isLogin);
    await AsyncStorage.setItem("isLogin", "login");
  }

  async function logout() {
    setAuthToken(false);
    await AsyncStorage.removeItem("isLogin");
  }

  const value = {
    token: authToken,
    isAuthenticated: authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
