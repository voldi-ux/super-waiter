import React, {useState} from 'react';
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
  addons,
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IncrementDecrementButton from '../components/buttons/incrementDecrementButton';
import {useDispatch, useSelector} from 'react-redux';
import {getItem} from '../redux/appData/appData';
import {baseUrl} from '../axios/axios';
import AddOn from '../components/addOnComponent/addOn';
import {addItem, updateItem} from '../redux/cart/cartRedux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ItemViewScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const params = route.params;
  const {_id, category, updating} = route.params;
  const item = useSelector(getItem)(_id, category);
  const [addOns, setAddons] = useState(params.addOns || []);
  const [qty, setQty] = useState(params.qty);

  const removeAddOn = addOn => {
    setAddons(prev => {
      return prev.filter(add => add.name !== addOn.name);
    });
  };

  const addAddOn = addOn => {
    setAddons(prev => {
      return [...prev, addOn];
    });
  };

  const increment = () => {

    setQty(prev => prev + 1);
  };
  const decrement = () => {
    setQty(prev => (prev > 1 ? prev - 1 : prev));
  };

  const getTotal = () => {
    let total = qty * item.price;

    if (addOns.length) {
      return addOns.reduce((t, add) => {
        return (t += add.price);
      }, total);
    }
    return total;
  };

  const addToCart = () => {
    let ITEM = {...item, qty, addOns};

    if (updating) {
      dispatch(updateItem(ITEM));
      navigation.goBack();
    } else {
      dispatch(addItem(ITEM));
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconF name="chevron-left" size={40} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headingTop}>{item.name}</Text>
        <View></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.img}
          source={{uri: `${baseUrl}${item.imagePath}`}}
          resizeMode="contain"
        />
        <View style={styles.btn}>
          <IncrementDecrementButton
            size="large"
            increment={increment}
            decrement={decrement}
            qty={qty}
          />
        </View>
        <View style={styles.headings}>
          <Text style={styles.heading}>{item.name}</Text>
          <View style={styles.ratings}>
            <IconM name="star" size={40} color={colors.yellow} />
            <Text style={styles.rating}>4.5</Text>
          </View>
        </View>
        <Text style={styles.about}>
          { item.description}
        </Text>
        <View style={styles.btn}>
          <View style={styles.readMoreBtn}>
            <Text style={styles.readMoreBtnText}>find out more</Text>
          </View>
        </View>
        {item.addOns
          ? item.addOns.map(add => (
              <AddOn
                addOns={addOns}
                addOn={add}
                key={add.name}
                remove={removeAddOn}
                add={addAddOn}
              />
            ))
          : null}
      </ScrollView>
      <View style={styles.botttomNav}>
        <View>
          <Text style={styles.botttomNavPriceHeading}>total price</Text>
          <Text style={styles.botttomNavPrice}>R {getTotal()}.00</Text>
        </View>
        <TouchableOpacity style={styles.botttomNavBtn} onPress={addToCart}>
          <View style={styles.botttomNavBtnInner}>
            <Icon name="handbag" size={30} color={'#ffff'} />
            <Text style={styles.botttomNavBtnInnerText}>
              {' '}
              {'  '}
              {updating ? 'update' : 'Add to cart'}
            </Text>
          </View>
        </TouchableOpacity>
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

export default ItemViewScreen;
