import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TRootStackParamList } from '../../types/Navigation.types';
import arrowLeftImg from '../../assets/arrowLeftBlack.png';
import good from '../../assets/good.png';
import addBtn from '../../assets/add.png';
import { statusBarHeight } from '../../constants/Layout.constant';
interface IGoodScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'Good'>;
}
export const GoodScreen: React.FC<IGoodScreenProps> = ({ navigation }) => {
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
                    Sandwich with cabbage
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
                    Restaraunt and cafe which have this dish in your city
                </Text>

                <View
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
                        Percini
                    </Text>
                </View>
            </ScrollView>
            <TouchableOpacity>
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
