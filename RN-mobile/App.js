import { useContext, useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Navigation } from "stacks/Navigation";
import { AuthContext, AuthContextProvider } from "store/auth-context";
import { getObjAsyncStorage } from "utils";

SplashScreen.preventAutoHideAsync();

function Root() {
  const [appIsReady, setAppIsReady] = useState(false);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedLoginUser = await getObjAsyncStorage("loginUser");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      if (storedLoginUser) {
        authCtx.saveLoginUserInfo(storedLoginUser);
      }

      setAppIsReady(true);
    }

    fetchToken();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
