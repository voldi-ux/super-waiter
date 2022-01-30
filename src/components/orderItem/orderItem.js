import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, } from 'react-native';


import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';
import { getFormatedTime } from '../../../timeUtil';

const OrderItem = ({ item}) => {
  const time = getFormatedTime(item.date)

  return (
    <View style={[styles.container]}>
      <Text style={styles.heading}>#{item.orderNo}</Text>
      <View>
        <Text style={styles.date}>Time : {time}</Text>
        <Text style={styles.status}>
          <Text style={{fontWeight: '700'}}> Status : </Text> {item.status}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: colors.background_top,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
  },

  heading: {
    fontSize: fontSize.large,
    fontWeight: '700',
    color: colors.black,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  date: {
    fontSize: fontSize.normal,
    color: colors.yellow,
    marginBottom: 5,
  },
  status: {
    color: colors.black,
    fontSize: fontSize.normal,
  },
});

export default OrderItem;
