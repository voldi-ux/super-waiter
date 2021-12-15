import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconF from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../colors/colors'
import { fontSize } from '../../typography/typography';
const IncrementDecrementButton = ({ size}) => {
  return (
    <View style={sytles.btn}>
      <IconF
        name="plus-circle"
        size={size === 'large' ? sytles.iconL.size : sytles.iconS.size}
        color={'#fff'}
      />
      <Text style={size === 'large' ? sytles.quantityL : sytles.quantityS}>
        1
      </Text>
      <IconF
        name="minus-circle"
        size={size === 'large' ? sytles.iconL.size : sytles.iconS.size}
        color={'#fff'}
      />
    </View>
  );

};


const sytles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection:'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.black,
    paddingVertical: 5,
    paddingHorizontal:15,
    width: 150,
    borderRadius:100,
  },
  quantityL: {
    fontSize: fontSize.large_xl,
    color:"#FFF"
  },
  quantityS: {
    fontSize: fontSize.normal,
    color:"#FFF"
  },
  iconL: {
    size:30
  },
  iconS: {
    size:25
  }
})

export default IncrementDecrementButton;
