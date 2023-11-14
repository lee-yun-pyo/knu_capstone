import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BottomButton } from "components/Common/BottomButton";

import { BackGroundColor } from "constants/color";
import { SignPathType, SignStackScreenProps } from "types";

import { styles } from "./style";

export function SelectType() {
  const [useType, setUseType] = useState(0);
  const navigation = useNavigation<SignStackScreenProps["navigation"]>();

  const handlePressType = (useType: number) => {
    setUseType(useType);
  };

  const handleNavigate = (screen: SignPathType) => {
    navigation.navigate(screen);
  };

  const handlePressSignUpButton = (screen: SignPathType) => {
    handleNavigate(screen);
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
            onPress={() => handlePressType(0)}
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
            onPress={() => handlePressType(1)}
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
        <BottomButton
          onPress={() => handlePressSignUpButton("SignUp")}
          content="회원가입"
        />
      </View>
    </View>
  );
}
