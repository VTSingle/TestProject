import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Actions} from "react-native-router-flux";
import styles from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../../actions/userActions';
import {red} from "../../constants/colors";

class DeleteTransaction extends React.Component {

    async pressDelete(){
        const {key_transaction}=this.props;
        await this.props.actions(deleteItem(key_transaction));
        Actions.MyInfo();
    }

    render() {
        return (
            <View  style={styles.positionElements}>
                <TouchableOpacity onPress = {() => this.pressDelete()}>
                    <View style={styles.rowElements}>
                        <View style={styles.positionAddButton}>
                            <Icon name="trash-alt" size={30} color={red}/>
                        </View>
                        <View style={styles.positionText}>
                            <Text style={styles.styleText}>Delete Transaction</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators(deleteItem, dispatch)
    })
)(DeleteTransaction);