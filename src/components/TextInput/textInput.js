import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';

const width = Dimensions.get('window').width;

const TextInputComponent = ({label}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={label} />
    </View>
  );
};

const styles = StyleSheet.create({

  input: {
    height: 50,
    color: colors.grey,
    backgroundColor: '#fff',
    borderWidth: 0,
    width: width * 0.9,
    paddingHorizontal: 10,
    fontSize: fontSize.normal,
  },
  container: {
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default TextInputComponent;
