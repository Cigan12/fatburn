import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../../store';
import { setEatingAction } from '../../reducers/EatingTimes/EatingTimes.reducer';
interface ISearchScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'Search'>;
}
export const SearchScreen: React.FC<ISearchScreenProps> = ({ navigation }) => {
    const state = useSelector((state: TStore) => state);
    const [search, setSearch] = useState('');
    const [filetredItems, setFiletredItems] = useState(
        state.GoodsReducer.items
    );
    const dispatch = useDispatch();
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
                    {state.EatingTimesReducer.currentEating}
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
                value={search}
                placeholder="Search food"
                onChangeText={(text: string) => {
                    setSearch(text);
                    setFiletredItems(
                        state.GoodsReducer.items.filter((item) =>
                            item.name.includes(text)
                        )
                    );
                }}
            />
            <ScrollView style={{ flex: 1, paddingTop: 8 }}>
                {filetredItems.map((item) => (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 48,
                            paddingTop: 16,
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            if (item.isRestoran)
                                navigation.navigate('Good', item);
                            else {
                                dispatch(
                                    setEatingAction({
                                        field: state.EatingTimesReducer
                                            .currentEating,
                                        value:
                                            state.EatingTimesReducer.eatings[
                                                state.EatingTimesReducer
                                                    .currentEating
                                            ].kcal + item.kcal,
                                    })
                                );
                                navigation.navigate('Diary');
                            }
                        }}
                    >
                        <View key={item.id}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: 'white',
                                    fontWeight: '500',
                                }}
                            >
                                {item.name}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: '#424242',
                                }}
                            >
                                {item.kcal} kcal
                            </Text>
                        </View>

                        <Image source={Plus} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};
