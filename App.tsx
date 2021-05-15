import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { DiaryScreen } from './screens/Diary/Diary.screen';
import { GoodScreen } from './screens/Good/Good.screen';
import { HomeScreen } from './screens/Home/Home.screen';
import { SearchScreen } from './screens/Search/Search.screen';
import { SignInScreen } from './screens/SignIn/SignIn.screen';
import { Store } from './store';
import { TRootStackParamList } from './types/Navigation.types';

const Stack = createStackNavigator<TRootStackParamList>();

export default function App() {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignIn" headerMode="none">
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Diary" component={DiaryScreen} />
                    <Stack.Screen name="Good" component={GoodScreen} />
                    <Stack.Screen name="Search" component={SearchScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
