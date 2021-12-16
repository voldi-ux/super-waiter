import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

import {colors} from '../../colors/colors';
import {fontSize} from '../../typography/typography';


import SectionItem from '../sectionItem/sectionItemComponent';


const Section = ({title, items}) => {
  const renderItem = () => {
    return <SectionItem />
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList data={items} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  heading: {
    fontSize: fontSize.large_xl,
    color: colors.yellow,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  ItemsContainer: {},
});

export default Section;
