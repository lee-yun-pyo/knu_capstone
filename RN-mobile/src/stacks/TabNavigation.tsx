import { useContext } from "react";
import { Alert } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { IconButton } from "components/Common/IconButton";
import { Home } from "screens/Home";
import { MyNear } from "screens/MyNear";
import { ProfileStack } from "./ProfileStack";

import { AuthContext } from "store/auth-context";

import { TabColor } from "constant/color";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  const authCtx = useContext(AuthContext);

  const logout = () => {
    Alert.alert("로그아웃", "로그아웃을 하시겠습니까?", [
      { text: "취소", style: "cancel" },
      {
        text: "로그아웃",
        style: "default",
        onPress: () => {
          authCtx.logout();
        },
      },
    ]);
  };
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="홈"
          component={Home}
          options={{
            tabBarActiveTintColor: TabColor.ACTIVE,
            tabBarInactiveTintColor: TabColor.INACTIVE,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={22}
                color={focused ? TabColor.ACTIVE : TabColor.INACTIVE}
              />
            ),
          }}
        />
        <Tab.Screen
          name="내 근처"
          component={MyNear}
          options={{
            tabBarActiveTintColor: TabColor.ACTIVE,
            tabBarInactiveTintColor: TabColor.INACTIVE,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "location" : "location-outline"}
                size={24}
                color={focused ? TabColor.ACTIVE : TabColor.INACTIVE}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="마이페이지"
          component={ProfileStack}
          options={{
            tabBarActiveTintColor: TabColor.ACTIVE,
            tabBarInactiveTintColor: TabColor.INACTIVE,
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name={focused ? "user" : "user-o"}
                size={22}
                color={focused ? TabColor.ACTIVE : TabColor.INACTIVE}
              />
            ),
            headerRight: () => (
              <IconButton
                name={"log-out"}
                size={24}
                color="#000"
                onPress={logout}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
