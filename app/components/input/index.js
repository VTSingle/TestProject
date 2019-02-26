import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './style';

class Input extends React.Component {

    handleLangChange = (description) => {
        this.props.onChangesDescription(description);
    };

    render() {
        const {title, description} = this.props;
        return (
            <View>
                <Text style={styles.styleText}>{title}</Text>
                <TextInput
                    style={styles.styleInput}
                    onChangeText={(text) => this.handleLangChange(text)}
                    value={description}
                />
            </View>
        );
    }
}

export default Input;
