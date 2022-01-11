import React from 'react';
import {View, StyleSheet, Text,Animated} from 'react-native';
import {fontSize} from '../../typography/typography';

const ErrorComponent = ({ msg }) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>{msg}</Text>
    </View>
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
