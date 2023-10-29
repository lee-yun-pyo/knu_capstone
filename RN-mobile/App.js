import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "screens/Home";
import { Detail } from "screens/Detail";
import { Map } from "screens/Map";
import { StatusBar } from "expo-status-bar";
import { Bid } from "screens/Bid";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Bid" component={Bid} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
