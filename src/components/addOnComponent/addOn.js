import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';

const AddOn = ({addOn, addOns, add, remove}) => {
  const addOnAdded = addOns.some(add => add.name === addOn.name);
  console.log(addOns)
  return (
    <View style={[styles.addOn, {opacity: addOnAdded ? 0.6 : 1}]}>
          <Text style={styles.addOnTxt}>{addOn.name}</Text>
      <View style={styles.addOnRight}>
        <Text style={styles.addOnTxt}>R {addOn.price}</Text>
        <TouchableOpacity
          style={styles.addOnBtn}
          onPress={() => {
            addOnAdded ? remove(addOn) : add(addOn);
          }}>
          <Text style={styles.addOnBtnTxt}>
            {addOnAdded ? 'remove' : 'add'}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addOn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.background_top,
    padding: 6,
    marginBottom: 10,
  },
  addOnRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  addOnTxt: {
    fontSize: fontSize.large,
    textTransform: 'capitalize',
    alignSelf: 'center',
  },

  addOnBtn: {
    width: 150,
    backgroundColor: colors.blue_dark,
    borderRadius: 100,
    padding: 7,
    marginLeft: 10,
  },
  addOnBtnTxt: {
    textAlign: 'center',
    fontSize: fontSize.normal,
    textTransform: 'capitalize',
    fontWeight: '600',
    color: '#fff',
  },
});

export default AddOn;
