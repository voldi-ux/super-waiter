import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconF from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';
const IncrementDecrementButton = ({ size, qty, increment, decrement }) => {
  
  return (
    <View style={styles.btn}>
      <TouchableOpacity onPress={increment}>
        <IconF
          name="plus-circle"
          size={size === 'large' ? styles.iconL.size : styles.iconS.size}
          color={'#fff'}
        />
      </TouchableOpacity>
      <Text style={size === 'large' ? styles.quantityL : styles.quantityS}>
        {qty}
      </Text>
      <TouchableOpacity onPress={decrement}>
        <IconF
          name="minus-circle"
          size={size === 'large' ? styles.iconL.size : styles.iconS.size}
          color={'#fff'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.black,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: 150,
    borderRadius: 100,
  },
  quantityL: {
    fontSize: fontSize.large_xl,
    color: '#FFF',
  },
  quantityS: {
    fontSize: fontSize.normal,
    color: '#FFF',
  },
  iconL: {
    size: 30,
  },
  iconS: {
    size: 25,
  },
});

export default IncrementDecrementButton;
