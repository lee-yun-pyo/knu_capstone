import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { Home } from "screens/Home";
import { Detail } from "screens/Detail";
import { Map } from "screens/Map";
import { StatusBar } from "expo-status-bar";
import { Bid } from "screens/Bid";
import { Profile } from "screens/Profile";
import { LikeList } from "screens/LikeList";
import { BiddingList } from "screens/BiddingList";
import { SaleHistory } from "screens/SaleHistory";
import { MyNear } from "screens/MyNear";
import { Upload } from "screens/Upload";
import { BackButton } from "components/Common/BackButton";
import { Start } from "screens/SignStack/Start";
import { SignUp } from "screens/SignStack/SignUp";
import { SelectType } from "screens/SignStack/SelectType";
import { SignUpMap } from "screens/SignStack/SignUpMap";
import { SignIn } from "screens/SignStack/SignIn";
import { theme } from "style/theme";
import { FontColor, TabColor } from "constants/color";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SignNavigation() {
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

function ProfileStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyPage" component={Profile} />
      <Stack.Screen name="LikeList" component={LikeList} />
      <Stack.Screen name="BiddingList" component={BiddingList} />
      <Stack.Screen name="SaleHistory" component={SaleHistory} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
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
          headerTitle: "홈",
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
        component={ProfileStackNavigation}
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
  );
}

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTintColor: FontColor.TINT }}
      >
        {/* <Stack.Screen
          name="SignStack"
          component={SignNavigation}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
