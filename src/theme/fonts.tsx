import {Platform} from 'react-native';

const fontFamily = Platform.select({
  ios: {
    BOLD: 'Okra-Bold.ttf',
    EXTRA_BOLD: 'Okra-ExtraBold.ttf',
    MEDIUM: 'Okra-Medium.ttf',
    MEDIUM_LIGHT: 'Okra-MediumLight.ttf',
    REGULAR: 'Okra-Regular.ttf',
  },
  android: {
    BOLD: 'Okra-Bold.ttf',
    EXTRA_BOLD: 'Okra-ExtraBold.ttf',
    MEDIUM: 'Okra-Medium.ttf',
    MEDIUM_LIGHT: 'Okra-MediumLight.ttf',
    REGULAR: 'Okra-Regular.ttf',
  },
});

export default fontFamily;
