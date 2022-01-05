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
  TouchableOpacity,
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IncrementDecrementButton from '../components/buttons/incrementDecrementButton';
import {useSelector} from 'react-redux';
import {getCategory, getItem} from '../redux/appData/appData';
import {baseUrl} from '../axios/axios';
import SearchItem from '../components/searchItem/searchItem';
import {FlatList} from 'react-native-gesture-handler';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const img1 = require('../assests/images/img2.png');

const CategoryScreen = ({navigation, route}) => {
  const {category} = route.params;
  const CATEGORY = useSelector(getCategory)(category);

  const renderItem = ({ item}) => {
      return  <SearchItem item={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconF name="chevron-left" size={40} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headingTop}>{category}</Text>
        <View></View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={CATEGORY}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />
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
    paddingVertical: 5,
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

export default CategoryScreen;
