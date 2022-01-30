import {Platform, Alert} from 'react-native';
import axios from 'axios';

export const baseUrl =
  Platform.OS == 'android'
    ? 'http://192.168.8.102:4000'
    : 'http://localhost:4000';

export const axiosGet = async url => {
  try {
    const resp = await axios.get(`${baseUrl}/${url}`);
    // console.log(resp)
    return resp.data
  } catch (error) {

    Alert.alert('oops are you sure you have an internet connection');
    return {err:'sometheng went wrong'}
  }
};

export const axiosPost = async (url, data) => {
  try {
    const resp = await axios.post(`${baseUrl}/${url}`, data);
    return resp.data;
  } catch (error) {
        Alert.alert('oops are you sure you have an internet connection');
        return null
  }
};
