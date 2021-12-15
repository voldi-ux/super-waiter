import React from 'react';
import { View, TextInput, StyleSheet,Dimensions } from 'react-native'
import { colors } from '../../colors/colors';
import { fontSize } from '../../typography/typography';
import IconF from 'react-native-vector-icons/Feather';
const width = Dimensions.get('window').width
const SearchInput = () => {
    return (
      <View style={styles.container}>
            <IconF name="search" size={30} color={colors.black} style={ styles.icon}/>
        <TextInput style={styles.input} placeholder="What are you looking for?"/>
      </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        color: colors.grey,
        backgroundColor: colors.background_top,
        borderWidth: 0,
        borderRadius: 100,
        width:width*.95,
        marginLeft: 5,
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