import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Bid } from "screens/Bid";
import { Detail } from "screens/Detail";
import { Upload } from "screens/Upload";
import { Map } from "screens/Map";
import { BackButton } from "components/Common/BackButton";
import { TabNavigation } from "./TabNavigation";

import { FontColor } from "constant/color";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerTintColor: FontColor.TINT }}
    >
      <Stack.Screen
        name="Tab"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <>
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerTitle: "" }}
        />
        <Stack.Screen
          name="Bid"
          component={Bid}
          options={{ headerTitle: "입찰하기" }}
        />
        <Stack.Screen
          name="Upload"
          component={Upload}
          options={{
            headerTitle: "내 재고 팔기",
            gestureDirection: "vertical",
            headerBackTitleVisible: false,
            gestureEnabled: false,
            headerLeft: () => <BackButton />,
          }}
        />
      </>
    </Stack.Navigator>
  );
}
