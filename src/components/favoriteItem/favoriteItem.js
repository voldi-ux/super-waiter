import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {baseUrl,axiosPost} from '../../axios/axios'

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';
import CartButton from '../buttons/cartButton';
import { useDispatch,useSelector } from 'react-redux';
import {
  removeItemFromFav,
  selectUserId
} from '../../redux/userRedux/userSlice';


import { addItem } from '../../redux/cart/cartRedux';

const FavoriteItem = ({ item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const userId = useSelector(selectUserId);
  const removeFavItem = async (type,item,userId) => { 
    const resp = await axiosPost(`update-user-favorites`, { type, item, userId });
    return resp
  };
  
 const addToCart = () => {
    dispatch(
      addItem({
        ...item,
        addOns: [],
        qty: 1,
      }),
    );
  };
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() =>
        navigation.navigate('ItemView', {
          _id: item._id,
          category: item.category,
          qty: 1,
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
            <IconM name="star" size={20} color={colors.yellow} />
            <Text style={styles.rating}> 4.5</Text>
          </View>
        </View>
        <Text style={styles.price}>R {item.price}.00</Text>
        <View style={[styles.flex]}>
          <View>
            <CartButton title="add to cart" onPress={addToCart} />
          </View>
          <TouchableOpacity
            style={styles.delete}
            onPress={async () => {
              const resp = await removeFavItem('remove', item._id, userId);
              dispatch(removeItemFromFav(resp));
            }}>
            <IconM name="trash-can" size={30} color={colors.grey} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
    height: 100,
    width: 120,
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
    marginBottom: 10,
  },
  rating: {
    fontSize: fontSize.normal,
    color: colors.blue_dark,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
  },
  delete: {
    // backgroundColor: colors.red,
  },
});

export default FavoriteItem;
