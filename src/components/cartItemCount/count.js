import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cartRedux';
import {fontSize} from '../../typography/typography';

const Count = () => {
    const count = useSelector(selectCartItems).length;
    
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 25,
    borderRadius: 40,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 4,
    left: -3,
    justifyContent: 'center',
  },
  count: {
    color: '#fff',
    textAlign: 'center',
    fontSize: fontSize.normal,
  },
});

export default Count;
