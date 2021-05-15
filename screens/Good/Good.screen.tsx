import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TRootStackParamList } from '../../types/Navigation.types';
import arrowLeftImg from '../../assets/arrowLeftBlack.png';
import good from '../../assets/good.png';
import addBtn from '../../assets/add.png';
import { statusBarHeight } from '../../constants/Layout.constant';
import { RouteProp } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { setEatingAction } from '../../reducers/EatingTimes/EatingTimes.reducer';
import { TStore } from '../../store';
interface IGoodScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'Good'>;
    route: RouteProp<TRootStackParamList, 'Good'>;
}
export const GoodScreen: React.FC<IGoodScreenProps> = ({
    navigation,
    route,
}) => {
    const state = useSelector((state: TStore) => state);
    const dispatch = useDispatch();
    return (
        <View
            style={{
                backgroundColor: 'rgba(52, 187, 10, 0.2)',
                flex: 1,
                paddingTop: statusBarHeight + 24,
                paddingHorizontal: 16,
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Image source={arrowLeftImg} />
            </TouchableOpacity>
            <ScrollView style={{ paddingTop: 32 }}>
                <Image
                    source={good}
                    style={{
                        alignSelf: 'center',
                    }}
                />
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '500',
                        paddingTop: 24,
                    }}
                >
                    {route.params.name}
                </Text>
                <View style={{ paddingTop: 24, flexDirection: 'row' }}>
                    <View
                        style={{
                            alignItems: 'center',
                            marginRight: 16,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                            }}
                        >
                            Corbs
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                            }}
                        >
                            42g
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            marginRight: 16,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                            }}
                        >
                            Corbs
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                            }}
                        >
                            42g
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            marginRight: 16,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                            }}
                        >
                            Corbs
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                            }}
                        >
                            42g
                        </Text>
                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            marginRight: 16,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                            }}
                        >
                            kcal
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                            }}
                        >
                            {route.params.kcal}
                        </Text>
                    </View>
                </View>
                <Text
                    style={{
                        paddingTop: 24,
                        fontSize: 16,
                    }}
                >
                    Details
                </Text>
                <Text
                    style={{
                        paddingTop: 12,
                        maxWidth: 200,
                        fontSize: 12,
                    }}
                >
                    {route.params.desc}
                </Text>
                {route.params.restorants.map((item) => (
                    <View
                        key={item}
                        style={{
                            paddingTop: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                borderWidth: 1,
                                borderRadius: 16,
                                width: 16,
                                height: 16,
                            }}
                        ></View>
                        <Text
                            style={{
                                paddingLeft: 8,
                            }}
                        >
                            {item}
                        </Text>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    dispatch(
                        setEatingAction({
                            field: state.EatingTimesReducer.currentEating,
                            value:
                                state.EatingTimesReducer.eatings[
                                    state.EatingTimesReducer.currentEating
                                ].kcal + route.params.kcal,
                        })
                    );
                    navigation.navigate('Diary');
                }}
            >
                <Image
                    source={addBtn}
                    style={{
                        marginBottom: 24,
                        alignSelf: 'center',
                    }}
                />
            </TouchableOpacity>
        </View>
    );
};
