import { useCallback, useState, useEffect } from "react";
import { View, ScrollView, Alert, Linking } from "react-native";
import * as picker from "expo-image-picker";

import { PickerButton } from "./PickerButton";
import { PreviewImage } from "./PreviewImage";

import { MAXIMUM_PICKED_NUMBER } from "constant";

import { styles } from "./style";

interface Props {
  setValue: (value: string[]) => void;
}

export function ImagePicker({ setValue }: Props) {
  const [pickedImages, setPickedImages] = useState<string[]>([]);
  const [cameraPermissionInfo, requestPermission] =
    picker.useCameraPermissions();

  const handleImageUploadLimitExceeded = () => {
    Alert.alert(
      "이미지 업로드 수 초과",
      `최대 ${MAXIMUM_PICKED_NUMBER}장 까지 업로드 할 수 있습니다`,
      [{ text: "확인" }]
    );
  };

  const linkToSettings = useCallback(async () => {
    await Linking.openSettings();
  }, []);

  const addNewImage = (newImageUrl: string[]) => {
    setPickedImages((prevImages) => [...newImageUrl, ...prevImages]);
  };

  const removeImageAtIndex = (index: number) => {
    setPickedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
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
          { text: "설정으로 이동", style: "default", onPress: linkToSettings },
        ]
      );
      return false;
    }

    return true;
  };

  const handleImageSelection = async (
    launchFunction: Function,
    options: any
  ) => {
    if (pickedImages.length === MAXIMUM_PICKED_NUMBER) {
      handleImageUploadLimitExceeded();
      return;
    }

    const result = await launchFunction(options);

    if (!result.canceled) {
      const newImages = result.assets.map((item: any) => item.uri);
      addNewImage(newImages);
    }
  };

  const takePhotosHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    const options = {
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    };

    await handleImageSelection(picker.launchCameraAsync, options);
  };

  const getImageHandler = async () => {
    const options = {
      mediaTypes: picker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      selectionLimit: MAXIMUM_PICKED_NUMBER - pickedImages.length,
      allowsMultipleSelection: true,
    };

    await handleImageSelection(picker.launchImageLibraryAsync, options);
  };

  useEffect(() => {
    setValue([...pickedImages]);
  }, [pickedImages]);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}
    >
      <View style={styles.buttonWrapper}>
        <PickerButton
          onPress={getImageHandler}
          icon="image"
          text={`${pickedImages.length} / ${MAXIMUM_PICKED_NUMBER}`}
        />
        <PickerButton
          onPress={takePhotosHandler}
          icon="camera"
          text="사진촬영"
        />
      </View>
      <View style={styles.imageWrapper}>
        {pickedImages.length !== 0 &&
          pickedImages.map((imageUrl, index) => (
            <PreviewImage
              key={imageUrl}
              source={imageUrl}
              onPress={removeImageAtIndex}
              index={index}
            />
          ))}
      </View>
    </ScrollView>
  );
}
