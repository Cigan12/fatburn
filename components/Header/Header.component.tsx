import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import Menu from '../../assets/menu.png';
import Logo from '../../assets/FatBurnLogoGreen.png';
import Search from '../../assets/search.png';
import { statusBarHeight } from '../../constants/Layout.constant';
interface IHeaderComponentProps {}
export const HeaderComponent: React.FC<IHeaderComponentProps> = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                paddingTop: statusBarHeight + 8,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
            }}
        >
            <TouchableOpacity>
                <Image source={Menu} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Logo} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Search} />
            </TouchableOpacity>
        </View>
    );
};
