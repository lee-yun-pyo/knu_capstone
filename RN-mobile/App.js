import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "screens/Home";
import { Detail } from "screens/Detail";
import { Map } from "screens/Map";
import { StatusBar } from "expo-status-bar";
import { Bid } from "screens/Bid";
import { Profile } from "screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="마이페이지" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Bid" component={Bid} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
