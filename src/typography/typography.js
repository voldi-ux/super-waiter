import { Dimensions,PixelRatio } from "react-native";

const screenWidth = Dimensions.get('window').width
const scale = screenWidth / 320


export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const fontSize = {
  smaller: normalize(6),
  small: normalize(8),
  normal: normalize(14),
  large: normalize(16),
  large_xl: normalize(18),
  large_xxl: normalize(28),
};


function getFontSize() {

  let fontSizes = {
    smaller: 8,
    small: 10,
    normal: 16,
    large: 18,
    large_xl: 24,
    large_xxl: 48,
  };



}