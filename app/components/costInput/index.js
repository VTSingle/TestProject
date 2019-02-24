import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './style';

class moneyInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currency: 'UAH',
            cost: ''
        }
    }

    componentDidMount(){
        const {cost}=this.props;
        this.setState({cost: cost})
    }

    handleLangChange = (value) => {
        this.setState({cost: value});
        this.props.onChangesValue(value);
    };

    render() {
        const { currency, cost } = this.state;
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
                    <Text style={styles.styleText}>{currency}</Text>
                </View>
            </View>
        );
    }
}

export default moneyInput;

