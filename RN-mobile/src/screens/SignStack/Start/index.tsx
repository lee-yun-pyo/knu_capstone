import { View, Image, Text, Pressable, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BottomButton } from "components/Common/BottomButton";

import { SignPathType, SignStackScreenProps } from "types";

import { styles } from "./style";

export function Start() {
  const navigation = useNavigation<SignStackScreenProps["navigation"]>();

  const handleNavigate = (screen: SignPathType) => {
    navigation.navigate(screen);
  };

  const handlePress = (screen: SignPathType) => {
    handleNavigate(screen);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View />
        <View>
          <View style={styles.imageWrapper}>
            <Image source={require("../../../../assets/logo.png")} />
            <View style={styles.imageTextView}>
              <Text style={styles.title}>브로콜리</Text>
              <Text style={styles.subTitle}>환경을 위해, 소상공인을 위해</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <BottomButton
            onPress={() => handlePress("SelectType")}
            content="시작하기"
          />
          <View>
            <Text style={styles.signInText}>
              이미 계정이 있나요?
              <Pressable onPress={() => handlePress("SignIn")}>
                <Text style={styles.signInBtn}>로그인</Text>
              </Pressable>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
