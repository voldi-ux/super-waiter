import React,{useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartItems, selectTotal } from '../redux/cart/cartRedux';
import CartItem from '../components/cartItem/cartItem';
import Options from '../components/optionsComponent/options';
import { logOut } from '../redux/userRedux/userSlice';

const width = Dimensions.get('window').width;


const CartScreen = ({ navigation }) => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectTotal);
  const [optionsVisible, setOptionsVisible] = useState(false)
  const dispatch = useDispatch()
  
  const renderItem = ({ item }) => {
    return <CartItem item={ item}/>
  }

  const navigateToInstruction = () => {
    if (items.length) {
      navigation.navigate('InstructionScreen');
    }
  }
  const navigateToAddress = () => {
    if (items.length) {
      navigation.navigate('AddressScreen');
    }
  }

  const closeOptions = () => {
    setOptionsVisible(false)
  }
  
  const openOptions = () => {
    setOptionsVisible(true)
  }
  const cartOptions = [
    {
      title: 'clear cart',
      onPress: () => {
        dispatch(clearCart())
      },
    },

    {
      title: 'go to favorites',
      onPress: () => {
        navigation.navigate('Favorite');
      },
    },
    {
      title: 'go to orders',
      onPress: () => {
        navigation.navigate('OrderScreen');
      },
    },
    {
      title: 'go to orders history',
      onPress: () => {
        navigation.navigate('OrderHistoryScreen');
        
      },
    },
    {
      title: 'go to account',
      onPress: () => navigation.navigate('AccountScreen'),
    },
    {
      title: 'log out',
      onPress: () => {
        dispatch(logOut())
        dispatch(clearCart())
      },
    },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconF name="chevron-left" size={40} color={colors.black} />
        </TouchableOpacity>
        <View style={styles.topNavCenter}>
          <Icon name="handbag" size={30} color={colors.black} />
          <Text style={styles.topNavText}> R {total}.00</Text>
        </View>
        <TouchableOpacity onPress={openOptions}>
          <Icon name="options-vertical" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>
      <View style={styles.aside}>
        <Text style={styles.asideText}>
          there {items.length === 1 ? 'is' : 'are'} currently
          <Text style={{color: colors.yellow}}> {items.length}</Text>{' '}
          {items.length === 1 ? 'item' : 'items'} in cart
        </Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        style={{flex: 1}}
      />
      <View style={styles.botttomNav}>
        <TouchableOpacity
          style={[
            styles.botttomNavBtn,
            {backgroundColor: colors.yellow, opacity: items.length ? 1 : 0.6},
          ]}
          onPress={navigateToInstruction}>
          <Text style={styles.botttomNavBtnInnerText}>Add instructions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToAddress}
          style={[
            styles.botttomNavBtn,
            {opacity: items.length ? 1 : 0.6},
            {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.9,
              shadowRadius: 5,
              elevation: 5,
            },
          ]}>
          <Text style={styles.botttomNavBtnInnerText}> Order Now</Text>
        </TouchableOpacity>
      </View>
      {optionsVisible && (
        <Options
          options={cartOptions}
          close={closeOptions}
          visible={optionsVisible}
        />
      )}
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
    marginVertical: 20,
  },

  asideText: {
    fontSize: fontSize.large,
    fontWeight: '800',
    textTransform: 'capitalize',
    color: colors.black,
    textAlign: 'center',
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
    width: (width - 30) / 2,
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

export default CartScreen;
