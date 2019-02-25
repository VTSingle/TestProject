import React, {} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {green, black} from "../colors";

export const iconList =  ({ icon, focused }) => (
    focused ? <Icon name="list-ul" size={30} color={green}/> : <Icon name="list-ul" size={30} color={black}/>
);

export const iconAdd =  ({ icon, focused }) => (
    focused ? <Icon name="plus-square" size={30} color={green}/> : <Icon name="plus-square" size={30} color={black}/>
);
