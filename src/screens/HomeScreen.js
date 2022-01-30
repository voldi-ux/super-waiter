import React, { useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  Animated,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../colors/colors';
import IconF from 'react-native-vector-icons/Feather';
import SearchInput from '../components/searchInput/searchInputComponent';
import {fontSize, normalize} from '../typography/typography';
import Section from '../components/section/sectionComponent';
import SlideshowHeader from '../components/slideShow/slideShow';
import {
  selectCategories,
  selectHot,
  selectRecomended,
} from '../redux/appData/appData';
import { store } from '../redux/store/store';
import PopUPModal from '../components/modal/modal';
import Count from '../components/cartItemCount/count';
import { selectVisible,setModalVisibilty } from '../redux/cart/cartRedux';
import Cart from '../components/cart/cart';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  const menus = ['starters', 'main', 'salads', 'drinks', 'desserts'];
  const dispatch = useDispatch();
  // const categories = useSelector(selectCategories);
  const recomended = useSelector(selectRecomended);
  const hot = useSelector(selectHot);
  const modalVisible = useSelector(selectVisible)

  //animations values
  const scrollY = useRef(new Animated.Value(0)).current



  const renderMenu = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen', {
        category:item
      })}>
        <Text style={styles.menu}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const slideNav = (toValue) => {
    Animated.timing(scrollY, {
      toValue,
      duration: 100,
      useNativeDriver:true
    }).start()
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.yellow} />

      <Animated.View
        style={[
          styles.topNav,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, height * 0.05, height * 0.2, height * 0.3],
                  outputRange: [0, -100, -100, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <IconF name="menu" size={30} color={colors.white} />
        </TouchableOpacity>
          <Cart size={30} color={colors.white}/>
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={0}
        onScroll={event => {
          const scrollTopValue = event.nativeEvent.contentOffset.y;
          scrollY.setValue(scrollTopValue);
        }}>
        {/* <HeaderComponent /> */}

        <View style={styles.headerContainer}>
          <SlideshowHeader />
          <SearchInput />
          <View style={styles.overLay}></View>
        </View>
        <View style={{marginVertical: 20, paddingHorizontal: 10}}>
          <Text style={styles.catagory}>choose from our</Text>
          <Text style={styles.catagory}>best menus</Text>
        </View>
        <FlatList
          style={{paddingHorizontal: 10}}
          showsHorizontalScrollIndicator={false}
          data={menus}
          renderItem={renderMenu}
          keyExtractor={item => item}
          horizontal
        />

        <Section title={'Hot stuff this week'} items={hot} />
        <Section title={'for you '} items={recomended} />
        <PopUPModal
          msg="The item you are trying to add is already in cart"
          visible={modalVisible}
          setVisible={bool => {
            dispatch(setModalVisibilty(bool));
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.yellow,
    paddingHorizontal: 10,
    zIndex: 10,
    position: 'absolute',
    right: 0,
    left:0
  },

  catagory: {
    fontSize: fontSize.large_xxl,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.yellow,
  },

  menu: {
    marginRight: width * 0.1,
    fontSize: fontSize.large,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.black,
  },

  overLay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    // backgroundColor: colors.yellow,
    // opacity: 0.9,
  },
});

export default HomeScreen;
