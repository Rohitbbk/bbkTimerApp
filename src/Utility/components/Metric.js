import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
// LOG  Device Width is ++++++++ 1280
// LOG  Device Height is ++++++++ 844

console.log('Device Width is ++++++++', width);
console.log('Device Height is ++++++++', height);

const guidelineBaseWidth = width > height ? 900 : 375;
const guidelineBaseHeight = width > height ? 350 : 812;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
