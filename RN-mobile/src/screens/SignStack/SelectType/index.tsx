import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BottomButton } from "components/Common/BottomButton";

import { BackGroundColor } from "constants/color";
import { SignStackScreenProps, UserType } from "types";

import { styles } from "./style";

export function SelectType() {
  const [selectedUser, setSelectedUser] = useState<UserType>("Buyer");
  const navigation = useNavigation<SignStackScreenProps["navigation"]>();

  const handlePressType = (selectedUser: UserType) => {
    setSelectedUser(selectedUser);
  };

  const navigateToSignUp = () => {
    return { type: selectedUser };
  };

  const handlePressSignUpButton = () => {
    const navigationParams = navigateToSignUp();
    navigation.navigate("SignUp", navigationParams);
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
                  selectedUser === "Buyer" ? BackGroundColor.GREEN : "white",
              },
            ]}
            onPress={() => handlePressType("Buyer")}
          >
            <View>
              <Text
                style={[
                  styles.buttonText,
                  { color: selectedUser === "Buyer" ? "white" : "#000" },
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
                  selectedUser === "Seller" ? BackGroundColor.GREEN : "white",
              },
            ]}
            onPress={() => handlePressType("Seller")}
          >
            <View>
              <Text
                style={[
                  styles.buttonText,
                  { color: selectedUser === "Seller" ? "white" : "#000" },
                ]}
              >
                판매자
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View>
        <BottomButton onPress={handlePressSignUpButton} content="회원가입" />
      </View>
    </View>
  );
}
