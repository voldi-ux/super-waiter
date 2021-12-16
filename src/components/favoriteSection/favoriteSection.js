import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CartItem from '../cartItem/cartItem';
import {fontSize} from '../../typography/typography';
import {colors} from '../../colors/colors';
import FavoriteItem from '../favoriteItem/favoriteItem';


const FavoriteSection = ({title, items}) => {
  return (
    <View>
      <Text style={styles.headingTop}>{title}</Text>
      <View>
     <FavoriteItem/>
     <FavoriteItem/>
     <FavoriteItem/>
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

export default FavoriteSection;
