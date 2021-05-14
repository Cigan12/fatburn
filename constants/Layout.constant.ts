import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;
export const statusBarHeight = Constants.statusBarHeight;
