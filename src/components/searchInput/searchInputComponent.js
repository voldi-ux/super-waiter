import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import IconF from 'react-native-vector-icons/Feather';

import { colors } from '../../colors/colors';

const SearchInput = () => {
  const navigation = useNavigation();

    return (
      <View style={styles.container}>
            <IconF name="search" size={30} color={colors.black} style={ styles.icon}/>
        <TextInput onFocus={()=> navigation.navigate('Search')} style={styles.input} placeholder="What are you looking for?"/>
      </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        color: colors.grey,
        backgroundColor: colors.background_top,
        borderWidth: 0,
        borderRadius: 100,
        width:'100%',
        paddingLeft:40,
        zIndex: -1,
        fontSize:18
        
    },
    container: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    icon: {
        position:'absolute',
        left: 10,
        color:colors.grey
    }

})
export default SearchInput