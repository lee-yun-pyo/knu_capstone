import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BiddingList } from "screens/BiddingList";
import { LikeList } from "screens/LikeList";
import { Profile } from "screens/Profile";
import { SaleHistory } from "screens/SaleHistory";

const Stack = createNativeStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyPage" component={Profile} />
      <Stack.Screen name="LikeList" component={LikeList} />
      <Stack.Screen name="BiddingList" component={BiddingList} />
      <Stack.Screen name="SaleHistory" component={SaleHistory} />
    </Stack.Navigator>
  );
}
