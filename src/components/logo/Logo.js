import React from 'react';
import { Image, useWindowDimensions } from 'react-native';


const Logo = () => {
    const height = useWindowDimensions().height
    const width = useWindowDimensions().width


    return <Image source={require('../../assests/images/logo.png')} style={{width}} />
}


export default Logo;