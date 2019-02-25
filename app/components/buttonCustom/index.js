import React from 'react';
import { Button } from 'react-native';
import {green} from "../../constants/colors";

class ButtonCustom extends React.Component {

    handlePress = () => {
        this.props.onButtonPress();
    };

    render() {
        const { title } = this.props;
        return (
            <Button
                title={title}
                onPress={this.handlePress}
                color={green}
            />
        );
    }
}

export default ButtonCustom;

