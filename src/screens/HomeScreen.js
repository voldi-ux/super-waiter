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
} from 'react-native';
import {colors} from '../colors/colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import HeaderComponent from '../components/header/headerComponent';
import SearchInput from '../components/searchInput/searchInputComponent';
import {fontSize} from '../typography/typography';
import Section from '../components/section/sectionComponent';

const width = Dimensions.get('window').width;

const HomeScreen = () => {
  const menus = ['starters', 'main', 'salads', 'drinks', 'desserts'];

  const renderMenu = ({item}) => {
    return (
        <Text style={styles.menu}>{item}</Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topNav}>
          <IconF name="menu" size={40} color={colors.black} />
          <Icon name="handbag" size={35} color={colors.black} />
        </View>

        <HeaderComponent />
        <SearchInput />

        <Text style={styles.catagory}>choose from our best menus</Text>
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
    marginTop: 40,
    fontSize: fontSize.large_xxl,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.yellow,
    marginBottom: 20,
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
