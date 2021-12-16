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

const SearchItem = item => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => navigation.navigate('ItemView')}>
      <Image source={img} style={styles.img} resizeMode="contain" />
      <View style={styles.containerRight}>
        <View style={[styles.headingsTop, styles.flex]}>
          <Text style={styles.heading}>Shrimps</Text>
          <View style={[styles.flex]}>
            <View style={[styles.flex]}>
              <IconM name="star" size={25} color={colors.yellow} />
              <Text style={styles.rating}> 4.5 {'     '}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="heart" size={20} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.catagroy}>Main Course</Text>
        <View style={[styles.flex]}>
          <Text style={styles.price}>R 45.00</Text>
          <CartButton title="add to cart" />
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
    width: width * 0.2,
    maxHeight: 100,
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
