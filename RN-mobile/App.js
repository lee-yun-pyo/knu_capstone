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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#404040",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={22}
              color={focused ? "black" : "#404040"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="내 근처"
        component={MyNear}
        options={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#404040",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "location" : "location-outline"}
              size={24}
              color={focused ? "black" : "#404040"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={ProfileStackNavigation}
        options={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#404040",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? "user" : "user-o"}
              size={22}
              color={focused ? "black" : "#404040"}
            />
          ),
        }}
      />
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
