import React from 'react';
import {StyleSheet, Pressable,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch, useSelector} from 'react-redux';

import {colors} from '../../colors/colors';
import {
  addItemToFav,
  removeItemFromFav,
  selectFavs,
  selectUserId,
} from '../../redux/userRedux/userSlice';
import {itemInFav} from './heartUtils';
import { axiosPost } from '../../axios/axios';

const FavHeart = ({item}) => {
  const userId = useSelector(selectUserId);
  const favs = useSelector(selectFavs);
  const inFav = itemInFav(item, favs);
  const dispatch = useDispatch();

  const toggleFavItem = async (type, item, userId) => { 
    //if item is a string then its a propbaly an id of an item.
    const data = typeof item === 'string' ? { type, itemId: item, userId } : { type, item, userId }
    
    const resp = await axiosPost(`update-user-favorites`, data);
    return resp
  };
  
  return (
    <TouchableOpacity
      onPress={async () => {
        if (inFav) {
          const resp = await toggleFavItem('remove', item._id, userId)
          console.log(resp)
          dispatch(removeItemFromFav(resp));
        } else {
          
          const resp = await toggleFavItem('add', item, userId);
          dispatch(addItemToFav(resp));
        }
      }}>
      {inFav ? (
        <IconM name="heart" size={25} color={colors.red} />
      ) : (
        <Icon name="heart" size={20} color={colors.black} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default FavHeart;
