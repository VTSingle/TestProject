import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './style';

class moneyInput extends React.Component {

    handleLangChange = (value) => {
        this.props.onChangesValue(value);
    };

    render() {
        const { cost } = this.props;
        return (
            <View style={styles.positionElements}>
                <View style={styles.positionAddButton}>
                    <TextInput
                        style={styles.styleInput}
                        onChangeText={(text) => this.handleLangChange(text)}
                        keyboardType = {'numeric'}
                        value={cost}
                    />
                </View>
                <View>
                    <Text style={styles.styleText}>UAH</Text>
                </View>
            </View>
        );
    }
}

export default moneyInput;

