import { useState } from "react";
import { View, Text, Pressable } from "react-native";

import { BackGroundColor } from "constants/color";

import { styles } from "./style";

export function SelectType() {
  const [useType, setUseType] = useState(0);

  const handlePress = (useType: number) => {
    setUseType(useType);
  };

  return (
    <View style={styles.container}>
      <View />
      <View>
        <Text style={styles.infoText}>회원 종류를 선택해주세요</Text>
        <View style={styles.buttonBox}>
          <Pressable
            style={[
              styles.buttonView,
              {
                backgroundColor:
                  useType === 0 ? BackGroundColor.GREEN : "white",
              },
            ]}
            onPress={() => handlePress(0)}
          >
            <View>
              <Text
                style={[
                  styles.buttonText,
                  { color: useType === 0 ? "white" : "#000" },
                ]}
              >
                일반
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.buttonView,
              {
                backgroundColor:
                  useType === 1 ? BackGroundColor.GREEN : "white",
              },
            ]}
            onPress={() => handlePress(1)}
          >
            <View>
              <Text
                style={[
                  styles.buttonText,
                  { color: useType === 1 ? "white" : "#000" },
                ]}
              >
                판매자
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View>
        <Text>saf</Text>
      </View>
    </View>
  );
}
