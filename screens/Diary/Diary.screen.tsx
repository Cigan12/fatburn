import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    Image,
    ImageSourcePropType,
    StyleProp,
    Text,
    View,
    ViewStyle,
} from 'react-native';
import { TRootStackParamList } from '../../types/Navigation.types';
import { HeaderLargeComponent } from '../../components/HeaderLarge/HeaderLarge.component';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Cake from '../../assets/Cake.png';
import Fire from '../../assets/Fire.png';
import Plus from '../../assets/Plus.png';
import Breakfast from '../../assets/Breakfast.png';
import Dinner from '../../assets/Dinner.png';
import Supper from '../../assets/Suppper.png';
import Snack from '../../assets/Snack.png';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../../store';
import { setCurrentEatingAction } from '../../reducers/EatingTimes/EatingTimes.reducer';

interface IDiaryScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'Diary'>;
}
export const DiaryScreen: React.FC<IDiaryScreenProps> = ({ navigation }) => {
    const state = useSelector((state: TStore) => state);
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <HeaderLargeComponent
                onBack={() => {
                    navigation.goBack();
                }}
            />
            <ScrollView style={{ flex: 1 }}>
                <View
                    style={{
                        marginTop: 24,
                        width: 284,
                        alignSelf: 'center',
                        paddingHorizontal: 24,
                        paddingVertical: 16,
                        shadowOffset: {
                            height: 2,
                            width: 0,
                        },
                        shadowColor: 'black',
                        zIndex: 20,
                        backgroundColor: 'white',
                        shadowOpacity: 0.3,
                        borderRadius: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: 16,
                        }}
                    >
                        <View>
                            <View
                                style={{
                                    paddingLeft: 8,
                                    borderLeftWidth: 1,
                                }}
                            >
                                <Text>Eaten</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image source={Cake} />
                                    <Text
                                        style={{
                                            paddingLeft: 8,
                                            fontSize: 16,
                                        }}
                                    >
                                        {Object.values(
                                            state.EatingTimesReducer.eatings
                                        ).reduce(
                                            (acc, item) => acc + item.kcal,
                                            0
                                        )}
                                    </Text>
                                    <Text
                                        style={{
                                            paddingLeft: 8,
                                            fontSize: 12,
                                            color: '#8F8F8F',
                                        }}
                                    >
                                        kcal
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    paddingLeft: 8,
                                    borderLeftWidth: 1,
                                    marginTop: 16,
                                }}
                            >
                                <Text>Burned</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image source={Fire} />
                                    <Text
                                        style={{
                                            paddingLeft: 8,
                                            fontSize: 16,
                                        }}
                                    >
                                        0
                                    </Text>
                                    <Text
                                        style={{
                                            paddingLeft: 8,
                                            fontSize: 12,
                                            color: '#8F8F8F',
                                        }}
                                    >
                                        kcal
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                borderRadius: 100,
                                backgroundColor: '#34BB0A',
                                height: 100,
                                width: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <View
                                style={{
                                    borderRadius: 100,
                                    backgroundColor: 'white',
                                    height: 98,
                                    width: 98,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                    {Object.values(
                                        state.EatingTimesReducer.eatings
                                    ).reduce((acc, item) => acc + item.kcal, 0)}
                                </Text>
                                <Text
                                    style={{
                                        color: '#8F8F8F',
                                        fontSize: 16,
                                        paddingTop: 7,
                                    }}
                                >
                                    total kcal
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            paddingTop: 16,
                            borderTopWidth: 1,
                        }}
                    >
                        <View
                            style={{
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 14,
                                }}
                            >
                                Corbs
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: '#8F8F8F',
                                    fontSize: 14,
                                }}
                            >
                                125 g
                            </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 14,
                                }}
                            >
                                Corbs
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: '#8F8F8F',
                                    fontSize: 14,
                                }}
                            >
                                125 g
                            </Text>
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 14,
                                }}
                            >
                                Corbs
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: '#8F8F8F',
                                    fontSize: 14,
                                }}
                            >
                                125 g
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        paddingTop: 32,
                        paddingHorizontal: 16,
                    }}
                >
                    <EatItem
                        calories={
                            state.EatingTimesReducer.eatings.breakfast.kcal
                        }
                        source={Breakfast}
                        title="Breakfast"
                        onAdd={() => {
                            dispatch(setCurrentEatingAction('breakfast'));
                            navigation.navigate('Search');
                        }}
                    />
                    <EatItem
                        style={{ marginTop: 24 }}
                        calories={state.EatingTimesReducer.eatings.dinner.kcal}
                        source={Dinner}
                        title="Dinner"
                        onAdd={() => {
                            dispatch(setCurrentEatingAction('dinner'));
                            navigation.navigate('Search');
                        }}
                    />
                    <EatItem
                        style={{ marginTop: 24 }}
                        calories={state.EatingTimesReducer.eatings.supper.kcal}
                        source={Supper}
                        title="Supper"
                        onAdd={() => {
                            dispatch(setCurrentEatingAction('supper'));
                            navigation.navigate('Search');
                        }}
                    />
                    <EatItem
                        style={{ marginTop: 24 }}
                        calories={state.EatingTimesReducer.eatings.snack.kcal}
                        source={Snack}
                        title="Snack"
                        onAdd={() => {
                            dispatch(setCurrentEatingAction('snack'));
                            navigation.navigate('Search');
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const EatItem: React.FC<{
    title: string;
    calories: number;
    source: ImageSourcePropType;
    onAdd?: () => void;
    style?: StyleProp<ViewStyle>;
}> = ({ calories, source, title, onAdd, style }) => {
    return (
        <TouchableOpacity
            style={[
                style,
                {
                    paddingHorizontal: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                    shadowColor: 'black',
                    shadowOffset: {
                        width: 1,
                        height: 2,
                    },
                    shadowOpacity: 0.2,
                    zIndex: 300,
                    backgroundColor: 'white',
                    paddingVertical: 8,
                },
            ]}
            onPress={onAdd}
        >
            <Image source={source} />
            <Text
                style={{
                    flexGrow: 1,
                    paddingLeft: 8,
                    fontSize: 16,
                    fontWeight: '500',
                }}
            >
                {title}
            </Text>
            <View
                style={{
                    paddingRight: 32,
                }}
            >
                <Text>{calories}</Text>
                <Text>kcal</Text>
            </View>
            <Image source={Plus} />
        </TouchableOpacity>
    );
};
