import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { type ImageSource } from "expo-image";

type Props = {
  imageSize: number; // 스티커의 초기 크기
  stickerSource: ImageSource; // 표시할 스티커 이미지의 소스
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  // imageSize를 공유 값으로 사용해서 Animated.Image의 크기를 조절할 수 있다
  // useSharedValue: 현재 값을 공유하고, 이 값을 변경하면 애니메이션을 트리거할 수 있다
  // .value: 공유 값의 현재 값을 가져올 수 있다
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // 더블 탭 제스처 정의
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2) // 더블 탭 제스처를 설정
    .onStart(() => {
      // 제스처가 시작되면
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2; // 이미지 크기를 2배로 변경
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2); // 이미지 크기를 원래 크기로 변경
      }
    });

  // useAnimatedStyle: 공유 값을 기반으로 애니메이션 스타일을 생성
  const imageStyle = useAnimatedStyle(() => {
    return {
      // withSpring: 스프링(탄성) 애니메이션을 사용하여 이미지 크기를 변경
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  // GestureDetector를 사용하여 제스처 이벤트를 감지
  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource} // 이미지 소스
            resizeMode="contain" // 이미지가 컨테이너 안에 비율을 유지하며 맞춰지도록 설정
            style={[
              imageStyle, // 애니메이션 스타일
              { width: imageSize, height: imageSize }, // 초기 크기 설정
            ]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
