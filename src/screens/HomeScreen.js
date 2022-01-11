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
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../colors/colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import HeaderComponent from '../components/header/headerComponent';
import SearchInput from '../components/searchInput/searchInputComponent';
import {fontSize} from '../typography/typography';
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <Animated.View
        style={[
          styles.topNav,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, height * 0.2, height*.4],
                  outputRange: [0, -100, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <IconF name="menu" size={40} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="handbag" size={35} color={colors.black} />
          <Count />
        </TouchableOpacity>
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}>
        {/* <HeaderComponent /> */}
        <SlideshowHeader />
        <SearchInput />

        <View style={{marginVertical: 20}}>
          <Text style={styles.catagory}>choose from our</Text>
          <Text style={styles.catagory}>best menus</Text>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={menus}
            renderItem={renderMenu}
            keyExtractor={item => item}
            horizontal
          />
        </View>
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
    paddingHorizontal: 10,
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
 
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
});

export default HomeScreen;
