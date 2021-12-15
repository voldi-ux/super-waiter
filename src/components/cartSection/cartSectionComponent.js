import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CartItem from '../cartIem/cartItem';
import {fontSize} from '../../typography/typography';
import {colors} from '../../colors/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CartSection = ({title, items}) => {
  return (
    <View>
      <Text style={styles.headingTop}>{title}</Text>
      <View style={styles.cartSectionItems}>
        <CartItem />
        <CartItem />
        <CartItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingTop: {
    fontSize: fontSize.large_xl,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: colors.yellow,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default CartSection;
