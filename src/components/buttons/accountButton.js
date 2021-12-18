import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,
Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';


const width = Dimensions.get('window').width

const AccountButton = ({title,iconName}) => {
  return (
    <TouchableOpacity style={sytles.btn}>
          {iconName && <Icon name={ iconName} color={'#fff'} size={25} />}
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: width*.9,
    borderRadius: 100,
  },
  title: {
    fontSize: fontSize.large,
      color: '#FFF',
     textTransform:'capitalize'
    // fontWeight: '700',
  },
});

export default AccountButton;
