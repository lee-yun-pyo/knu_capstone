import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SignUpData } from "types";
import { setObjAsyncStorage } from "utils";

const initUserInfo = {
  id: "",
  password: "",
  email: "",
  name: "",
  phone: "",
  profile_image: null,
  latitude: 0,
  longitude: 0,
  role: "Buyer",
  address: "",
  idToken: "",
};

export const AuthContext = createContext({
  token: "",
  userInfo: initUserInfo,
  isAuthenticated: false,
  authenticate: (isLogin: boolean) => {},
  saveLoginUserInfo: (userInfo: SignUpData) => {},
  logout: () => {},
});

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authToken, setAuthToken] = useState(false);
  const [loginUserInfo, setLoginUserInfo] = useState<SignUpData | null>(null);

  async function authenticate(isLogin: boolean) {
    setAuthToken(isLogin);
    await AsyncStorage.setItem("isLogin", "login");
  }

  async function saveLoginUserInfo(userInfo: SignUpData) {
    setLoginUserInfo(userInfo);
    setObjAsyncStorage("loginUser", userInfo);
  }

  async function logout() {
    setAuthToken(false);
    await AsyncStorage.removeItem("isLogin");
    await AsyncStorage.removeItem("loginUser");
  }

  const value = {
    token: authToken,
    userInfo: loginUserInfo,
    isAuthenticated: authToken,
    authenticate,
    saveLoginUserInfo,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
