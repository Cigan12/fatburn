import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dimensions, Image, ImageBackground, Text, View } from 'react-native';
import { TRootStackParamList } from '../../types/Navigation.types';
import Logo from '../../assets/FatBurnLogoWhite.png';
import Bg from '../../assets/Bg.png';
import { deviceHeight, deviceWidth } from '../../constants/Layout.constant';
import Constants from 'expo-constants';
import { FButtonComponent } from '../../components/FButton/FButton.component';

interface ISignInScreenProps {
    navigation: StackNavigationProp<TRootStackParamList, 'SignIn'>;
}
export const SignInScreen: React.FC<ISignInScreenProps> = ({ navigation }) => {
    return (
        <View>
            <ImageBackground
                style={{
                    height: deviceHeight,
                    width: deviceWidth,
                }}
                source={Bg}
            >
                <Image
                    style={{
                        alignSelf: 'center',
                        marginTop: 60 + Constants.statusBarHeight,
                    }}
                    source={Logo}
                />
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 42,
                        }}
                    >
                        Welcome
                    </Text>
                    <Text
                        style={{
                            color: 'white',
                            paddingTop: 16,
                            maxWidth: 192,
                            textAlign: 'center',
                            fontSize: 18,
                        }}
                    >
                        Lets start healthy way in your life
                    </Text>
                </View>
                <View
                    style={{
                        paddingBottom: 69,
                        paddingHorizontal: 32,
                    }}
                >
                    <FButtonComponent
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    >
                        Sign in
                    </FButtonComponent>
                    <FButtonComponent
                        style={{
                            marginTop: 16,
                        }}
                        outlined
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    >
                        Log in
                    </FButtonComponent>
                </View>
            </ImageBackground>
        </View>
    );
};
