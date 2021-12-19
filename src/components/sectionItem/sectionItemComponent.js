import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../colors/colors';
import IconF from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { fontSize } from '../../typography/typography';
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width;
const img1 = require('../../assests/images/img.png');

const SectionItem = ({ item }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ItemView')}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View></View>
        <TouchableOpacity>
        <IconF name="heart" size={20} color={colors.black} />
        </TouchableOpacity>
      </View>

      <Image source={img1} resizeMode="contain" style={styles.img} />
      <Text style={styles.name}>Shrimp</Text>
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
          marginTop: 20,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.price}>R 34</Text>
        <TouchableOpacity>
          <Icon name="handbag" size={30} color={colors.black} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    backgroundColor: colors.background_top,
    width: width * 0.35,
    padding: 15,
    borderRadius: 15,
    maxHeight: 300,
    marginBottom: 10,
    marginRight: 20,
  },
  img: {
    width: width * 0.35,
    maxHeight: 150,
  },
  name: {
    fontSize: fontSize.large,
    color: colors.black,
    textTransform: 'capitalize',
    marginBottom:10,
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

export default SectionItem;
