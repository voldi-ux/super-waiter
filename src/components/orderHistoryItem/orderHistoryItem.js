import React, { useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';
import CartButton from '../buttons/cartButton';
import {getFormatedTime} from '../../../timeUtil';
import SwipeToRemove from '../swipeToRemove/SwipeToRemove';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, selectUserId } from '../../redux/userRedux/userSlice';


const OrderHistoryItem = ({ item}) => {
   const time = getFormatedTime(item.date);

  const userId = useSelector(selectUserId)
const dispatch = useDispatch()
  

  
  const remove = () => {
     dispatch(deleteOrder(userId, item._id))
  }
  return (
    <SwipeToRemove remove={remove}>
      <View style={[styles.container]}>
        <Text style={styles.heading}>#{ item.orderNo}</Text>
        <View style={styles.flex}>
          <Text style={styles.date}>time : {time}</Text>
          <TouchableOpacity style={styles.delete} onPress={remove}>
            <IconM name="trash-can" size={30} color={colors.grey} />
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <CartButton title="Re-Order" />
        </View>
      </View>
    </SwipeToRemove>
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
  },

  heading: {
    fontSize: fontSize.large,
    fontWeight: '700',
    color: colors.black,
    textTransform: 'capitalize',
  },
  date: {
    fontSize: fontSize.normal,
    color: colors.yellow,
   
  },

  edit: {
    backgroundColor: colors.blue,
  },
  delete: {
    // backgroundColor: colors.red,
    marginLeft: 15,
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default OrderHistoryItem;
