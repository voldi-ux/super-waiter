import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IncrementDecrementButton from '../components/buttons/incrementDecrementButton';
import FavoriteSection from '../components/favoriteSection/favoriteSection';

const width = Dimensions.get('window').width;

const img1 = require('../assests/images/img2.png');

const FavoriteScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
            <IconM name="heart" size={30} color={colors.red} />
          <Icon name="options-vertical" size={30} color={colors.black} />
        </View>
        <View style={styles.aside}>
          <Text style={styles.asideText}>
            there are <Text style={{color: colors.yellow}}>10</Text> items in
            your
          </Text>
        </View>
        <FavoriteSection title="starters" name="cart" />
        <FavoriteSection title="Main Courses" name="cart" />
        <FavoriteSection title="Drinks" name="cart" />
      </ScrollView>
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
  topNavCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topNavText: {
    fontSize: fontSize.large,
    fontWeight: '800',
    textTransform: 'capitalize',
    color: colors.yellow,
  },
  aside: {
    width: width * 0.95,
    backgroundColor: colors.background_top,
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
  },

  asideText: {
    fontSize: fontSize.large,
    fontWeight: '800',
    textTransform: 'capitalize',
    color: colors.black,
    textAlign: 'center',
  },

});

export default FavoriteScreen;
