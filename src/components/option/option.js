import React from 'react';
import {View, StyleSheet, Modal, Text,TouchableOpacity} from 'react-native';
import { fontSize } from '../../typography/typography';

const Option = ({title, onPress,close }) => {
  return (
    <TouchableOpacity style={{ width: '100%', padding: 10 }} onPress={() => {
      onPress()
      close()
    }}>
      <Text style={styles.item}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    // marginBottom: 10,
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSize.large,
    textTransform:'capitalize'
  },
});

export default Option;
