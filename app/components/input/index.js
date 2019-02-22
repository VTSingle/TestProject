import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './style';

class Input extends React.Component {

    constructor(){
        super();
        this.state = {
            defaultText: ''
        }
    }

    componentDidMount(){
        const {value}=this.props;
        this.setState({defaultText: value})
    }

    handleLangChange = (description) => {
        this.setState({defaultText: description});
        this.props.onChangesDescription(description);
    };

    render() {
        const { title } = this.props;
        const { defaultText } = this.state;
        return (
            <View>
                <Text style={styles.styleText}>{title}</Text>
                <TextInput
                    style={styles.styleInput}
                    onChangeText={(text) => this.handleLangChange(text)}
                    value={defaultText}
                />
            </View>
        );
    }
}

export default Input;
