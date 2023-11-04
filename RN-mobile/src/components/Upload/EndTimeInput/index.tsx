import { View, Text } from "react-native";

import { commonStyle } from "screens/Upload/style";

export function EndTimeInput() {
  return (
    <View style={commonStyle.container}>
      <Text style={commonStyle.label}>마감 시간</Text>
    </View>
  );
}
