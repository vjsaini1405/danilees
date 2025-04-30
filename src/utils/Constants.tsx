import {Dimensions} from 'react-native';
import Toast from 'react-native-simple-toast';

export enum Colors {
  primary = '#FC5431',
}

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export const showError = (err: any) => {
  let temp = err?.toString();
  Toast.showWithGravity(temp, Toast.LONG, Toast.BOTTOM);
};
