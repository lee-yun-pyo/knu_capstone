import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthStack } from "./AuthStack";
import { HomeStack } from "./HomeStack";
import { AuthContext } from "store/auth-context";

import { theme } from "style/theme";

export function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer theme={theme}>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <HomeStack />}
    </NavigationContainer>
  );
}
