import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SelectType } from "screens/SignStack/SelectType";
import { SignIn } from "screens/SignStack/SignIn";
import { SignUp } from "screens/SignStack/SignUp";
import { SignUpMap } from "screens/SignStack/SignUpMap";
import { Start } from "screens/SignStack/Start";

import { FontColor } from "constants/color";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: FontColor.TINT }}>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectType"
        component={SelectType}
        options={{
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerTitle: "회원가입" }}
      />
      <Stack.Screen
        name="SignUpMap"
        component={SignUpMap}
        options={{
          headerTitle: "가게 위치 설정",
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}
