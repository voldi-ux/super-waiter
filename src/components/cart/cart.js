import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity,View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Count from '../cartItemCount/count'
import { normalize } from '../../typography/typography';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartRedux';
const Cart = ({ size, color }) => {
    const navigation = useNavigation()    
    const count = useSelector(selectCartItems).length;
    
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon
            name="handbag"
            size={size}
            color={color}
            style={{marginBottom: normalize(6)}}
          />
          <Count count={count}/>
      </TouchableOpacity>
    );
}


export default Cart;