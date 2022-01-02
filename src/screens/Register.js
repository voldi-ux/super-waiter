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
} from 'react-native';
import { useDispatch } from 'react-redux';
import {colors} from '../colors/colors';
import {fontSize} from '../typography/typography';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountButton from '../components/buttons/accountButton';
import TextInputComponent from '../components/TextInput/textInput';
import ErrorComponent from '../components/errorComponent/error';
import {axiosPost} from '../axios/axios';
import {logIn}from '../redux/userRedux/userSlice'


const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [userInfo, setInfo] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [err, setErr] = useState(null);

  const signUp = async () => {
    const resp = await axiosPost('sign-up', userInfo);
    console.log(resp)
    if (resp.msg) return setErr(resp.msg);

    return dispatch(logIn(resp));
  };

  const handleChange = (txt, type) => {
    setInfo(prevState => {
      const newState = {...prevState};
      newState[type] = txt + ''
      return newState;
    });
  };

  const resetValues = () => {
    setEmail('');
    setPassword('');
    setErr(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconF name="chevron-left" size={40} color={colors.black} />
          </TouchableOpacity>
          <IconM name="account" size={40} color={colors.black} />
          <View></View>
        </View>
        <View style={styles.containerInner}>
          <Text style={styles.heading}>create an account now</Text>
          {err ? <ErrorComponent msg={err} /> : null}
          <TextInputComponent
            label="Name"
            onChangeText={text => {
              handleChange(text, 'name');
            }}
          />
          <TextInputComponent
            label="Surname"
            onChangeText={text => {
              handleChange(text, 'surname');
            }}
          />
          <TextInputComponent
            label="Email"
            keyboardType={'email-address'}
            onChangeText={text => {
              handleChange(text, 'email');
            }}
          />
          <TextInputComponent
            label="Phone"
            keyboardType={'numeric'}
            onChangeText={text => {
              handleChange(text, 'phone');
            }}
          />
          <TextInputComponent
            label="Password"
            secureTextEntry={true}
            onChangeText={text => {
              handleChange(text, 'password');
            }}
          />
          <TextInputComponent
            label="Confirm Password"
            secureTextEntry={true}
            onChangeText={text => {
              handleChange(text, 'confirmPassword');
            }}
          />
          <View style={styles.flex}>
            <Text style={[styles.link, {color: colors.yellow}]}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignInScreen')}>
              <Text style={[styles.link, {color: colors.blue}]}>
                {' '}
                Sign in instead
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <AccountButton title="register" onPress={() => signUp()} />
          </View>
        </View>
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
  containerInner: {
    backgroundColor: colors.background_top,
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  heading: {
    fontSize: fontSize.large_xl,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    textTransform: 'uppercase',
    color: colors.yellow,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  link: {
    fontSize: fontSize.normal,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
});

export default RegisterScreen;
