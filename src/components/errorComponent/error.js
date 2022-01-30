import React, { useEffect, useRef } from 'react';
import {View, StyleSheet, Text,Animated,Vibration} from 'react-native';
import {fontSize} from '../../typography/typography';

const ErrorComponent = ({ msg }) => {
  const moveX = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Vibration.vibrate(750)

    Animated.sequence([
      Animated.timing(moveX, {
        useNativeDriver: true,
        toValue: -5,
        duration: 250,
      }),
      Animated.timing(moveX, {
        useNativeDriver: true,
        toValue: 5,
        duration: 250,
      }),
      Animated.timing(moveX, {
        useNativeDriver: true,
        toValue: -0,
        duration: 250,
      }),
    ]).start();

  })
  return (
    <Animated.View style={[styles.container,{transform:[{translateX:moveX}]}]}>
      <Text style={styles.msg}>{msg}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    padding: 5,
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#ff3849',
  },
  msg: {
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#ffff',
    fontSize: fontSize.normal,
  },
});

export default ErrorComponent;
