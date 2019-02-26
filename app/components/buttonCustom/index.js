import React from 'react';
import {Button} from 'react-native';
import {green} from "../../constants/colors";

const CustomButton = ({title, onButtonPress}) => (
    <Button
        title={title}
        onPress={onButtonPress}
        color={green}
    />
);

export default CustomButton;