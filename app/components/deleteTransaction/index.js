import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {red} from "../../constants/colors";

class DeleteTransaction extends React.Component {

    pressDelete = () => {
        this.props.onPressDelete();
    };

    render() {
        const {title} = this.props;
        return (
            <View  style={styles.positionElements}>
                <TouchableOpacity onPress = {this.pressDelete}>
                    <View style={styles.rowElements}>
                        <View style={styles.positionAddButton}>
                            <Icon name="trash-alt" size={30} color={red}/>
                        </View>
                        <View style={styles.positionText}>
                            <Text style={styles.styleText}>{title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default DeleteTransaction;