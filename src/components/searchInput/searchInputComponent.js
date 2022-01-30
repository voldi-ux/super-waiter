import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import IconF from 'react-native-vector-icons/Feather';

import { colors } from '../../colors/colors';
import { fontSize, normalize } from '../../typography/typography';

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
    height: normalize(35),
    color: colors.grey,
    backgroundColor: colors.background_top,
    borderWidth: 0,
    borderRadius: 100,
    width: '100%',
    paddingLeft: normalize(30),
    zIndex: -1,
    fontSize: (fontSize.normal),
  },
  container: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal:10,
    zIndex: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    position: 'absolute',
    left: normalize(12),
    color: colors.grey,
    opacity:.4 ,
    zIndex: 2,
  },
});
export default SearchInput