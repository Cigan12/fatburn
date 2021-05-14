import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ArrowLeft from '../../assets/ArrowLeft.png';
import { statusBarHeight } from '../../constants/Layout.constant';
interface IHeaderLargeComponentProps {
    onBack?: () => void;
}
export const HeaderLargeComponent: React.FC<IHeaderLargeComponentProps> = ({
    onBack,
}) => {
    return (
        <View
            style={{
                backgroundColor: '#34BB0A',
                paddingTop: statusBarHeight + 16,
                paddingHorizontal: 16,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity onPress={onBack}>
                    <Image source={ArrowLeft} />
                </TouchableOpacity>
                <Text
                    style={{
                        paddingLeft: 8,
                        color: 'white',
                        fontSize: 18,
                    }}
                >
                    Diary
                </Text>
            </View>
            <View
                style={{
                    paddingVertical: 32,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 14,
                    }}
                >
                    Yesterday
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 14,
                    }}
                >
                    Today
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 14,
                    }}
                >
                    Tomorrow
                </Text>
            </View>
        </View>
    );
};
