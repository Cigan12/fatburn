import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';
import { TRootStackParamList } from '../../types/Navigation.types';

interface ISearchScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'Search'>;
}
export const SearchScreen: React.FC<ISearchScreenProps> = () => {
    return <View></View>;
};
