import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { View, StyleSheet, Platform } from "react-native";
import { useRef, useState } from "react";
import { type ImageSource } from "expo-image";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(
    undefined
  );
  const imageRef = useRef<View>(null);

  // 앱이 처음 실행될 때 권한을 요청한다
  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    // launchImageLibrarimageSourceyAsync 함수를 사용하여 이미지 라이브러리를 열 수 있다
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"], // 이미지만 선택할 수 있도록 설정
      allowsEditing: true, // 이미지 편집을 허용
      aspect: [4, 3], // 이미지의 가로 세로 비율을 4:3으로 설정
      quality: 1, // 이미지 품질을 1로 설정, 0.1 ~ 1 사이의 값을 가질 수 있다
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // assets[0]: 선택한 이미지의 정보
      setShowAppOptions(true); // 이미지 선택 후에는 앱 옵션을 보여준다
    } else {
      alert("You cancelled the image picker.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // 웹인 경우에는 dom-to-image를 사용하여 이미지를 저장한다
    if (Platform.OS !== "web") {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      // 웹이 아닌 경우에는 react-native-view-shot을 사용하여 이미지를 저장한다
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    // View 대신에 GestureHandlerRootView를 사용: 제스처를 사용할 수 있도록 한다
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        {/*
         * collapsable: false로 설정하여 이미지가 제대로 표시되도록 한다, true로 설정하면 이미지가 표시되지 않을 수 있다
         * View 컴포넌트가 background image와 emoji sticker만을 캡처하도록 설정한다
         */}
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            imgSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji && (
            <EmojiSticker imageSize={60} stickerSource={pickedEmoji} />
          )}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3, // 1/3만큼의 공간을 차지
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 60,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
