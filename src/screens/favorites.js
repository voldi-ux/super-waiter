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
  FlatList
} from 'react-native';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { selectFavs } from '../redux/userRedux/userSlice';
import FavoriteItem from '../components/favoriteItem/favoriteItem';

const width = Dimensions.get('window').width;


const FavoriteScreen = ({ navigation }) => {
  const favs = useSelector(selectFavs)

  const renderFavs = ({ item }) => {
    return <FavoriteItem item={item}/>
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
            <IconM name="heart" size={30} color={colors.red} />
          <Icon name="options-vertical" size={30} color={colors.black} />
        </View>
        <View style={styles.aside}>
          <Text style={styles.asideText}>
            there are <Text style={{ color: colors.yellow }}>{favs.length }</Text> items in
            favorites
          </Text>
        </View>
        <FlatList data={favs} keyExtractor={item => item._id} renderItem={renderFavs} />
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

});

export default FavoriteScreen;
