import React from 'react';
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
} from 'react-native';
import {colors} from '../colors/colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import HeaderComponent from '../components/header/headerComponent';
import SearchInput from '../components/searchInput/searchInputComponent';
import {fontSize} from '../typography/typography';
import Section from '../components/section/sectionComponent';

const width = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  const menus = ['starters', 'main', 'salads', 'drinks', 'desserts'];
  const navigateTo = screenName => {
    navigation.navigate(screenName);
  };
  const renderMenu = ({item}) => {
    return <Text style={styles.menu}>{item}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topNav}>
          <IconF name="menu" size={40} color={colors.black} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="handbag" size={35} color={colors.black} />
          </TouchableOpacity>
        </View>

        <HeaderComponent />
        <SearchInput />

        <View style={{marginVertical:20}}>
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
        <Section title={'Hot stuff this week'} items={[1, 2, 3, 4]} />
        <Section title={'for you '} items={[1, 2, 3, 4]} />
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
