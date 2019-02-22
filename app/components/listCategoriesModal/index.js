import React from 'react';
import {Text, View, Modal, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {categories_income, categories_consumption} from "../../constants/categories";
import styles from './style';
import Icon from "react-native-vector-icons/FontAwesome5";
import {bindActionCreators} from "redux";
import {hideModal} from "../../actions/userActions";

class listCategoriesModal extends React.Component {

    constructor(){
        super();
        this.state = {
            selectId: 0
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.actions(hideModal(Object.assign(item, this.state)))}>
                <View style={styles.styleBlock}>
                    <Icon name={item.icon} size={30} color="black"/>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    select(id){
        this.setState({selectId: id})
    }

    render() {
        const {state} = this.props;
        const {selectId} = this.state;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={state.modal}
            >
                <View style={styles.modalStyle}>
                    <View style={styles.content}>
                        <View style={styles.rowText}>
                            <TouchableOpacity onPress = {() => this.select(0)}>
                                <Text style={selectId === 0 ? styles.textSelect : styles.textDefault}>Income</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {() => this.select(1)}>
                                <Text style={selectId === 1 ? styles.textSelect : styles.textDefault}>Costs</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={selectId === 0 ? categories_income : categories_consumption}
                            renderItem={this.renderItem}
                            numColumns={3}
                            keyExtractor={(item) => item.icon}
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators(hideModal, dispatch)
    })
)(listCategoriesModal);
