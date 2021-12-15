import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IncrementDecrementButton from '../components/buttons/incrementDecrementButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const img1 = require('../assests/images/img2.png');

const ItemViewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topNav}>
          <IconF name="chevron-left" size={40} color={colors.black} />
          <Text style={styles.headingTop}>sea salad</Text>
          <Icon name="options-vertical" size={30} color={colors.black} />
        </View>
        <Image style={styles.img} source={img1} resizeMode="contain" />
        <View style={styles.btn}>
          <IncrementDecrementButton size="large" />
        </View>
        <View style={styles.headings}>
          <Text style={styles.heading}>Sea sald</Text>
          <View style={styles.ratings}>
            <IconM name="star" size={40} color={colors.yellow} />
            <Text style={styles.rating}>4.5</Text>
          </View>
        </View>
        <Text style={styles.about}>
          Eat with relish, toy with our food, or take a tentative mouthful -to
          take a large mouthful later on, if we like it. Select a piece of
          chicken from our plate and chew thoughtfully, to pick up a slice of
          bread and nibble the edge of it soon after. Fall to eat, chomp and
          swallow enthusiastically, or just pick our food carefully. Eat with
          relish, toy with our food, or take a tentative mouthful -to take a
          large mouthful later on, if we like it. Select a piece of
        </Text>
        <View style={styles.btn}>
          <View style={styles.readMoreBtn}>
            <Text style={styles.readMoreBtnText}>find out more</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.botttomNav}>
        <View>
          <Text style={styles.botttomNavPriceHeading}>total price</Text>
          <Text style={styles.botttomNavPrice}>R 45.00</Text>
        </View>
        <View style={styles.botttomNavBtn}>
          <View style={styles.botttomNavBtnInner}>
            <Icon name="handbag" size={30} color={'#ffff'} />
            <Text style={styles.botttomNavBtnInnerText}> Add to cart</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
  },
  containerInner: {
    display: 'flex',
    alignItems: 'center',
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  headingTop: {
    fontSize: fontSize.large,
    fontWeight: '800',
    textTransform: 'capitalize',
    color: colors.yellow,
  },
  img: {
    width: width * 0.9,
    height: height * 0.4,
  },

  btn: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: fontSize.large_xl,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: colors.yellow,
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  rating: {
    fontSize: fontSize.large,
    fontWeight: '700',
    color: colors.blue_dark,
  },

  about: {
    fontSize: fontSize.normal,
    lineHeight: 25,
  },
  readMoreBtn: {
    backgroundColor: colors.yellow,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: 150,
    borderRadius: 100,
  },

  readMoreBtnText: {
    color: '#fff',
    fontSize: fontSize.large,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  botttomNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:5
  },
  botttomNavBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.black,
    borderRadius: 1000,
    width: width / 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  botttomNavBtnInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  botttomNavBtnInnerText: {
    color: '#fff',
    fontSize: fontSize.large,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  botttomNavPriceHeading: {
    fontSize: fontSize.large,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: colors.black,
  },

  botttomNavPrice: {
    fontSize: fontSize.large,
    color: colors.blue_dark,
  },
});

export default ItemViewScreen;
