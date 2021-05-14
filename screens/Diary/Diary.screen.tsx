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

interface IDiaryScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'Diary'>;
}
export const DiaryScreen: React.FC<IDiaryScreenProps> = ({ navigation }) => {
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
                                        850
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
                                    850
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
                        calories="512"
                        source={Breakfast}
                        title="Breakfast"
                        onAdd={() => {
                            navigation.navigate('Search');
                        }}
                    />
                    <EatItem
                        style={{ marginTop: 24 }}
                        calories="512"
                        source={Dinner}
                        title="Dinner"
                        onAdd={() => {
                            navigation.navigate('Search');
                        }}
                    />
                    <EatItem
                        style={{ marginTop: 24 }}
                        calories="512"
                        source={Supper}
                        title="Supper"
                        onAdd={() => {
                            navigation.navigate('Search');
                        }}
                    />
                    <EatItem
                        style={{ marginTop: 24 }}
                        calories="512"
                        source={Snack}
                        title="Snack"
                        onAdd={() => {
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
    calories: string;
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
