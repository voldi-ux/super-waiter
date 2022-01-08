import React,{useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import IconF from 'react-native-vector-icons/Feather';

import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import AccountButton from '../components/buttons/accountButton';
import { countInstructionWords } from '../redux/cart/cartUtils';
import {setOrderInstruction} from '../redux/cart/cartRedux';


const InstructionScreen = ({ navigation }) => {
    const [instructions, setInstructions] = useState('')
  const maxWords = 180
  let wordCount = countInstructionWords(instructions)
    const dispatch = useDispatch()

  //this is an impure function, it relies on state outside its immidiate scope.
  const handleChange = (text) => {
    wordCount = countInstructionWords(text);
    if (wordCount <= maxWords) {
        setInstructions(text)
      }
  }
  
  const onAddInstructions = () => {
    if (wordCount < 5) {
          Alert.alert('instructions should at least have 5 words')
    } else {
      dispatch(setOrderInstruction(instructions))
        }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconF name="chevron-left" size={40} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.headingTop}>add instructions</Text>
        <View></View>
      </View>
      <View style={styles.TxtInputContainer}>
        <Text style={styles.count}>{wordCount}/{ maxWords}</Text>
        <TextInput
          multiline={true}
          style={styles.TxtInput}
          autoFocus
          value={instructions}
          onChangeText={handleChange}
        />
        <AccountButton title={'add '} onPress={onAddInstructions}/>
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
    marginBottom: 20,
  },
  topNavCenter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  count: {
    position: 'absolute',
    top: 5,
    right: 5,
    color:colors.blue_dark
  },
  headingTop: {
    fontSize: fontSize.large,
    fontWeight: '800',
    textTransform: 'capitalize',
    color: colors.yellow,
  },
  TxtInputContainer: {
    backgroundColor: colors.background_top,
    minHeight: 200,
    justifyContent: 'space-between',
    padding: 10
  },
  TxtInput: {
    fontSize: fontSize.large,
    textAlign: 'left',
  },
});

export default InstructionScreen;
