import React from 'react'
import { View, Text, StyleSheet,Image,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IncrementDecrementButton from '../buttons/incrementDecrementButton';

import { colors } from '../../colors/colors';
import { fontSize } from '../../typography/typography';

const width = Dimensions.get('window').width
const img = require('../../assests/images/img.png')

const CartItem = () => {
    return (
      <View style={[styles.container]}>
        <Image source={img} style={styles.img} resizeMode="contain" />
        <View style={styles.containerRight}>
          <View style={[styles.headingsTop, styles.flex]}>
            <Text style={styles.heading}>Shrimps</Text>
            <View style={[styles.flex]}>
              <IconM name="star" size={20} color={colors.yellow} />
              <Text style={styles.rating}> 4.5</Text>
            </View>
          </View>
          <Text style={styles.price}>R 45.00</Text>
          <View style={[styles.flex]}>
            <View>
              <IncrementDecrementButton size="small" />
            </View>
            <View style={styles.delete}>
              <IconM name="trash-can" size={30} color={'#fff'} />
            </View>
          </View>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: colors.background_top,
    // padding: 5,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  containerRight: {
    flex: 1,
  },
  img: {
    width: width * 0.2,
    maxHeight: 150,
  },
  heading: {
    fontSize: fontSize.large,
    fontWeight: '700',
    color: colors.black,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: fontSize.normal,
    fontWeight: '700',
      color: colors.black,
    marginBottom:10,
    },
    rating: {
        fontSize: fontSize.normal,
        color:colors.blue_dark
    },
    bottom: {
        display: 'flex',
        flexDirection:'row'
    },
    delete: {
        backgroundColor:colors.red
    },

});

export default CartItem
