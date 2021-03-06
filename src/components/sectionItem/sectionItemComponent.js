import React,{memo} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {colors} from '../../colors/colors';
import IconF from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { fontSize, normalize } from '../../typography/typography';
import {baseUrl } from '../../axios/axios'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/cart/cartRedux';
import { selectUserId } from '../../redux/userRedux/userSlice';
import FavHeart from '../FavouriteHeart/Heart';
const width = Dimensions.get('window').width;

const SectionItem = ({ item }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const userId = useSelector(selectUserId)

  const addToCart = () => {
    dispatch(
      addItem({
        ...item,
        addOns: [],
        qty: 1,
      }),
    );
  }

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ItemView', {
        _id: item._id,
        category: item.category,
        qty:1
      })}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View></View>
         <FavHeart item={item}/>
      </View>

      <Image source={{uri:`${baseUrl}${item.imagePath}`}} resizeMode="contain" style={styles.img} />
      <Text style={styles.name}>{item.name}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <IconF name="star" size={20} color={colors.yellow} />
        <Text style={{marginLeft: 10}}>4.5</Text>
      </View>
      <View
        style={{
          marginTop: normalize(4),
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.price}>R {item.price}</Text>
        <TouchableOpacity onPress={addToCart}>
          <Icon name="handbag" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: normalize(20),
    backgroundColor: colors.background_top,
    width: normalize(130),
    padding: normalize(10),
    borderRadius: 15,
    marginRight: normalize(10),
  },
  img: {
    height: normalize(80),
    marginHorizontal: 'auto',
  },
  name: {
    fontSize: fontSize.large,
    color: colors.black,
    textTransform: 'capitalize',
    marginBottom: normalize(4),
  },
  price: {
    fontSize: fontSize.large,
    color: colors.grey,
  },

  rating: {
    color: colors.grey,
  },

  bag: {
    color: colors.grey,
  },
});

export default memo(SectionItem);
