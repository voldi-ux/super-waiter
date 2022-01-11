import {Platform, Alert} from 'react-native';
import axios from 'axios';

export const baseUrl =
  Platform.OS !== 'android'
    ? 'http://10.0.2.2:4000'
    : 'http://localhost:4000';

export const axiosGet = async url => {
  try {
    const resp = await axios.get(`${baseUrl}/${url}`);
    return resp.data
  } catch (error) {
    Alert.alert('oops are you sure you have an internet connection');
  }
};

export const axiosPost = async (url, data) => {
  try {
    const resp = await axios.post(`${baseUrl}/${url}`, data);
    return resp.data;
  } catch (error) {
        Alert.alert('oops are you sure you have an internet connection');

  }
};
