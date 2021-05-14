import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';
import { TRootStackParamList } from '../../types/Navigation.types';

interface IGoodScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'Good'>;
}
export const GoodScreen: React.FC<IGoodScreenProps> = () => {
    return <View></View>;
};
