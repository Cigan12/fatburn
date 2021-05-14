import React from 'react';
import {
    StyleProp,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

interface IFButtonComponentProps {
    style?: StyleProp<ViewStyle>;
    outlined?: boolean;
    onPress?: () => void;
}
export const FButtonComponent: React.FC<IFButtonComponentProps> = ({
    style,
    children,
    outlined,
    onPress,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                style,
                {
                    backgroundColor: outlined ? 'transparent' : '#34BB0A',
                    height: 50,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: outlined ? 1 : undefined,
                    borderColor: outlined ? 'white' : undefined,
                },
            ]}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 16,
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};
