import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SignUpData } from "types";
import { setObjAsyncStorage } from "utils";

const INIT_USER_INFO = {
  name: "",
  email: "",
  id: "",
  password: "",
  passwordConfirm: "",
  latitude: 0,
  longitude: 0,
  address: "",
  idToken: "",
  profile_image: "",
  phone: "",
  role: "Buyer",
};

interface Props {
  userInfo: SignUpData | null;
  isAuthenticated: boolean;
  authenticate: (isLogin: boolean) => Promise<void>;
  saveLoginUserInfo: (userInfo: SignUpData) => void;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<Props>({
  userInfo: INIT_USER_INFO,
  isAuthenticated: false,
  authenticate: async (isLogin) => {},
  saveLoginUserInfo: (userInfo) => {},
  logout: async () => {},
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
    userInfo: loginUserInfo,
    isAuthenticated: authToken,
    authenticate,
    saveLoginUserInfo,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
