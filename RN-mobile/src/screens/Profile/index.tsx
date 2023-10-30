import { View, Text } from "react-native";

import { styles } from "./style";

export function Profile() {
  return (
    <View>
      <View>
        <Text>userName</Text>
      </View>
      <View>
        <View>
          <Text>관심목록</Text>
        </View>
        <View>
          <Text>입찰내역</Text>
        </View>
        <View>
          <Text>판매내역</Text>
        </View>
      </View>
    </View>
  );
}
