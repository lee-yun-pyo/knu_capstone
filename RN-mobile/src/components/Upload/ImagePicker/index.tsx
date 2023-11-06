import { useState } from "react";
import { View, ScrollView, Alert } from "react-native";
import * as picker from "expo-image-picker";

import { PickerButton } from "./PickerButton";
import { PreviewImage } from "./PreviewImage";

import { styles } from "./style";

export function ImagePicker() {
  const [pickedImages, setPickedImages] = useState<string[]>([]);
  const [cameraPermissionInfo, requestPermission] =
    picker.useCameraPermissions();

  const addNewImage = (newImageUrl: string[]) => {
    setPickedImages((prevImages) => [...newImageUrl, ...prevImages]);
  };

  const verifyPermission = async () => {
    if (cameraPermissionInfo?.status === picker.PermissionStatus.UNDETERMINED) {
      const permissionRespnse = await requestPermission();

      return permissionRespnse.granted;
    }

    if (cameraPermissionInfo?.status === picker.PermissionStatus.DENIED) {
      Alert.alert(
        "카메라 접근 차단중",
        "서비스를 이용하려면 카메라 접근을 허용해주세요",
        [
          { text: "취소", style: "cancel" },
          { text: "설정으로 이동", style: "default", onPress: () => {} },
        ]
      );
      return false;
    }

    return true;
  };

  const takePhotosHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }
    const image = await picker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    if (image.assets) {
      addNewImage([image.assets[0].uri]);
    }
  };

  const getImageHandler = async () => {
    const result = await picker.launchImageLibraryAsync({
      mediaTypes: picker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      selectionLimit: 5,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const newImages = result.assets.map((item) => item.uri);
      addNewImage(newImages);
    }
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    >
      <View style={styles.buttonWrapper}>
        <PickerButton onPress={getImageHandler} icon="image" />
        <PickerButton onPress={takePhotosHandler} icon="camera" />
      </View>
      <View style={styles.imageWrapper}>
        {pickedImages.length !== 0 &&
          pickedImages.map((imageUrl) => (
            <PreviewImage key={imageUrl} source={imageUrl} />
          ))}
      </View>
    </ScrollView>
  );
}
