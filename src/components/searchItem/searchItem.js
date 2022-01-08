import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';
import CartButton from '../buttons/cartButton';
import { baseUrl } from '../../axios/axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartRedux';
import FavHeart from '../FavouriteHeart/Heart';

const SearchItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch= useDispatch()
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
          category: item.category,
          _id: item._id,
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
            <View style={[styles.flex]}>
              <IconM name="star" size={25} color={colors.yellow} />
              <Text style={styles.rating}> 4.5 {'     '}</Text>
            </View>
          <FavHeart item={item}/>
          </View>
        </View>
        <Text style={styles.catagroy}>{item.category}</Text>
        <View style={[styles.flex]}>
          <Text style={styles.price}>R {item.price}.00</Text>
          <CartButton title="add to cart" onPress={addToCart} />
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
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  containerRight: {
    flex: 1,
  },
  img: {
    height: 100,
    width:120,
    alignSelf:"center"
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
    backgroundColor: colors.red,
  },
});

export default SearchItem;
