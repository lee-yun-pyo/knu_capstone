import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "screens/Home";
import { MyNear } from "screens/MyNear";
import { ProfileStack } from "./ProfileStack";

import { TabColor } from "constants/color";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
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
            headerTitle: "",
          }}
        />
      </Tab.Navigator>
    </>
  );
}
