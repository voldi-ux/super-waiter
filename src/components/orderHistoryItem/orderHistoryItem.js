import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IncrementDecrementButton from '../buttons/incrementDecrementButton';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';
import CartButton from '../buttons/cartButton';

const width = Dimensions.get('window').width;
const img = require('../../assests/images/img.png');

const OrderHistoryItem = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <Text style={styles.heading}>Shrimps</Text>
        <View style={styles.flex}>
          <Text style={styles.date}>Ordered on 29-12-21</Text>
          <View style={[styles.flex]}>
            <TouchableOpacity style={styles.edit}>
              <IconM name="square-edit-outline" size={30} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete}>
              <IconM name="trash-can" size={30} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      <View style={styles.btn}>
        <CartButton title="Re-Order" />
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
  },
  date: {
    fontSize: fontSize.normal,
    color: colors.yellow,
   
  },

  edit: {
    backgroundColor: colors.blue,
  },
  delete: {
    backgroundColor: colors.red,
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
