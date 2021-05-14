import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';
import { TRootStackParamList } from '../../types/Navigation.types';
import { HeaderComponent } from '../../components/Header/Header.component';
import { ScrollView } from 'react-native-gesture-handler';
import HomeBg from '../../assets/HomeBg.png';
import RunGirl from '../../assets/RunGirl.png';
import { FButtonComponent } from '../../components/FButton/FButton.component';

interface IHomeScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'Home'>;
}
export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <HeaderComponent />
            <ScrollView
                style={{ paddingHorizontal: 16 }}
                contentContainerStyle={{
                    flex: 1,
                }}
            >
                <Text
                    style={{
                        paddingTop: 32,
                        fontSize: 18,
                        fontWeight: '500',
                    }}
                >
                    Hello, Olyash!
                </Text>
                <Image
                    style={{
                        marginTop: 40,
                        alignSelf: 'center',
                    }}
                    source={HomeBg}
                />
                <Image
                    style={{
                        marginTop: 40,
                        alignSelf: 'center',
                    }}
                    source={RunGirl}
                />
            </ScrollView>
            <FButtonComponent
                style={{ marginHorizontal: 32, marginBottom: 45 }}
                onPress={() => {
                    navigation.navigate('Diary');
                }}
            >
                Check Diary
            </FButtonComponent>
        </View>
    );
};
