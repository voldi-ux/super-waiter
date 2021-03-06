import React,{memo} from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,UIManager,LayoutAnimation,Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native';


import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IncrementDecrementButton from '../buttons/incrementDecrementButton';

import { colors } from '../../colors/colors';
import { fontSize, normalize } from '../../typography/typography';
import { baseUrl } from '../../axios/axios';
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeItem } from '../../redux/cart/cartRedux';
import SwipeToRemove from '../swipeToRemove/SwipeToRemove';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}



const CartItem = ({ item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementItem(item._id))
  }
  const decrement = () => {
    dispatch(decrementItem(item._id))
  }
 const getTotal = () => {
   let total = item.qty * item.price;

   if (item.addOns.length) {
     return item.addOns.reduce((t, add) => {
       return (t += add.price);
     }, total);
   }
   return total;
  };
  

  const remove = () => {
     LayoutAnimation.linear();
    
    dispatch(removeItem(item._id))
  }
    return (
      <SwipeToRemove remove={remove}>
        <Pressable
          style={[styles.container]}
          onPress={() =>
            navigation.navigate('ItemView', {
              _id: item._id,
              category: item.category,
              qty: item.qty,
              addOns: item.addOns,
              updating: true,
            })
          }>
          <Image
            source={{uri: `${baseUrl}${item.imagePath}`}}
            style={styles.img}
            resizeMode="contain"
          />
          <View style={styles.containerRight}>
            <View style={[styles.headingsTop, styles.flex]}>
              <Text style={styles.heading}>{item.name}</Text>
              <View style={[styles.flex]}>
                <Text style={styles.rating}>
                  {item.qty} x {item.price}
                </Text>
              </View>
            </View>
            <Text style={styles.price}>R {getTotal()}.00</Text>
            <View style={[styles.flex]}>
              <View>
                <IncrementDecrementButton
                  size="small"
                  qty={item.qty}
                  increment={increment}
                  decrement={decrement}
                />
              </View>
              <TouchableOpacity style={styles.delete} onPress={remove}>
                <IconM name="trash-can" size={30} color={colors.grey} />
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </SwipeToRemove>
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
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    // marginBottom: 10,
  },
  containerRight: {
    flex: 1,
  },
  img: {
    height: normalize(60),
    width: normalize(80),
    alignSelf: 'center',
  },
  heading: {
    fontSize: fontSize.large,
    fontWeight: '700',
    color: colors.black,
    textTransform: 'capitalize',
  },
  price: {
    fontSize: fontSize.normal,
    color: colors.grey,
    marginBottom: normalize(4),
  },
  rating: {
    fontSize: fontSize.normal,
    color: colors.blue_dark,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
  },

});

export default memo(CartItem)
