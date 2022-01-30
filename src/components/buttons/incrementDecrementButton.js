import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconF from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../colors/colors';
import {fontSize, normalize} from '../../typography/typography';
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
    width: normalize(130),
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
    size: normalize(25),
  },
  iconS: {
    size: normalize(23),
  },
});

export default IncrementDecrementButton;
