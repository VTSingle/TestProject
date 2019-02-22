import React, {} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const iconList =  ({ icon, focused }) => (
    focused ? <Icon name="list-ul" size={30} color="#004d00"/> : <Icon name="list-ul" size={30} color="#000000"/>
);

export const iconAdd =  ({ icon, focused }) => (
    focused ? <Icon name="plus-square" size={30} color="#004d00"/> : <Icon name="plus-square" size={30} color="#000000"/>
);