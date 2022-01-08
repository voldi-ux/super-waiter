import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';

const OrderItem = ({ status}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <Text style={styles.heading}>#772234456</Text>
      <View>
        <Text style={styles.date}>Ordered on 29-12-21</Text>
              <Text style={styles.status}>
                  <Text style={{ fontWeight: '700' }}> Status : </Text> { status}
         </Text>
      </View>
    </View>
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
    paddingVertical: 15,
    marginVertical: 10,
  },

  heading: {
    fontSize: fontSize.large,
    fontWeight: '700',
    color: colors.black,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  date: {
    fontSize: fontSize.normal,
    color: colors.yellow,
    marginBottom: 5,
  },
  status: {
    color: colors.black,
    fontSize: fontSize.normal,
  },
});

export default OrderItem;
