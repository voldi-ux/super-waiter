import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList
} from 'react-native';


import { colors } from '../colors/colors';
import {fontSize} from '../typography/typography';
import IconF from 'react-native-vector-icons/Feather';
import { axiosGet, baseUrl } from '../axios/axios';
import PopUPModal from '../components/modal/modal';
import SearchItem from '../components/searchItem/searchItem';

const width = Dimensions.get('window').width;

const SearchScreen = ({navigation}) => {
  const [searchTerm, setTerm] = useState('');
  const [items, setItems] = useState([]);
  const [modalVisible,setVisible] = useState(false)
  const [msg, setMsg] = useState('')
  
  const renderheading = () => {
    if (items.length && searchTerm.length > 3) {
      return (
        <Text style={styles.asideText}>
          You Searched For<Text style={{ color: colors.yellow }}> { searchTerm}</Text>{' '}
          And
          <Text style={{color: colors.yellow}}> {items.length}</Text> Results
          Are Found
        </Text>
      );
    } else  {
      return (
        <Text style={styles.asideText}>
          Search for your favorite meals, desserts, drinks etc.
        </Text>
      );
    }
  };
  const onSubmit = async ({nativeEvent: {eventCount, target, text,key}}) => {
    if (text.length < 4) {
      setMsg('oops, your characters should atleast be 4 characters long');
      setVisible(true)
      return;
    }
    const data = await axiosGet(`search-products?term=${searchTerm}`);
    if (data.msg) {
         setMsg(data.msg);
      setVisible(true);
    } else {
      setItems(data)
    }
  };

  const renderResults = ({ item }) => {
    return <SearchItem item={item} />
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconF name="chevron-left" size={40} color={colors.black} />
        </TouchableOpacity>
        <TextInput
          value={searchTerm}
          onChangeText={setTerm}
          style={styles.textInput}
          onSubmitEditing={onSubmit}
          placeholder="What are you looking for?"
          autoFocus
          returnKeyType="search"
        />
      </View>
      <View showsVerticalScrollIndicator={false}>
        <View style={styles.aside}>{renderheading()}</View>
        <FlatList data={items} renderItem={renderResults} keyExtractor={(item)=> item._id }/>
    <PopUPModal msg={msg} visible={modalVisible} setVisible={(bool) => setVisible(bool)}/>
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
  topNav: {
    display: 'flex',
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

  textInput: {
    height: 50,
    color: colors.grey,
    backgroundColor: colors.background_top,
    borderWidth: 0,
    borderRadius: 100,
    flex: 1,
    paddingHorizontal: 15,
    fontSize: fontSize.normal,
  },
  aside: {
    width: width * 0.95,
    // backgroundColor: colors.background_top,
    padding: 10,
    borderRadius: 100,
    marginVertical: 20,
  },

  asideText: {
    fontSize: fontSize.large,
    fontWeight: '800',
    color: colors.black,
    textAlign: 'center',
  },
});

export default SearchScreen;
