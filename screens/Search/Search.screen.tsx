import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { TRootStackParamList } from '../../types/Navigation.types';
import { statusBarHeight } from '../../constants/Layout.constant';
import Plus from '../../assets/plusWhite.png';
interface ISearchScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'Search'>;
}
export const SearchScreen: React.FC<ISearchScreenProps> = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#34BB0A',
                paddingHorizontal: 16,
                paddingTop: statusBarHeight + 16,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        color: 'white',
                        fontWeight: '500',
                    }}
                >
                    Breakfast
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: 'white',
                            fontWeight: '500',
                        }}
                    >
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>
            <TextInput
                style={{
                    height: 36,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    marginTop: 24,
                    paddingHorizontal: 16,
                }}
                placeholder="Search food"
            />
            <ScrollView style={{ flex: 1, paddingTop: 8 }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 48,
                        paddingTop: 16,
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        navigation.navigate('Good');
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'white',
                                fontWeight: '500',
                            }}
                        >
                            Tea with milk
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: '#424242',
                            }}
                        >
                            1 cup (240 ml) 23 kcal
                        </Text>
                    </View>
                    <Image source={Plus} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};
