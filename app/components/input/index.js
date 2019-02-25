import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './style';

class Input extends React.Component {

    constructor(){
        super();
        this.state = {
            description: ''
        }
    }

    componentDidMount(){
        const {value}=this.props;
        this.setState({description: value})
    }

    componentWillReceiveProps(props){
        this.setState({description: props.value })
    }

    handleLangChange = (description) => {
        this.setState({description: description});
        this.props.onChangesDescription(description);
    };

    render() {
        const { title } = this.props;
        const { description } = this.state;
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
