import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';

const CartButton = ({title}) => {
  return (
    <TouchableOpacity style={sytles.btn}>
          <Icon name="handbag" color={'#fff'} size={25 }/>
      <Text style={sytles.title}>
        {'  '} {title}
      </Text>
    </TouchableOpacity>
  );
};

const sytles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.black,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: 180,
    borderRadius: 100,
  },
  title: {
    fontSize: fontSize.normal,
    color: '#FFF',
    fontWeight: '700',
  },
});

export default CartButton;
