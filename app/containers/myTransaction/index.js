import React, { Component } from 'react';
import {View, FlatList, TouchableOpacity, AsyncStorage, AppState} from 'react-native';
import {Actions} from "react-native-router-flux";
import styles from './style';
import {connect} from "react-redux";
import ShowDate from '../../components/showDate';
import TransactionBlock from '../../components/transactionBlock';
import WarnText from '../../components/warnText';
import {bindActionCreators} from "redux";
import {addItem} from "../../actions/userActions";

class MyList extends Component {

    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    sortUserList = () => {
        const {state} = this.props;
        this.setState({list: state.list.sort((a,b) => new Date(a.date) - new Date(b.date))})
    };

    componentDidMount(){
        AppState.addEventListener('change', this._handleAppStateChange);
        this.sortUserList();
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = async (nextAppState) => {
        const {state} = this.props;
        if (nextAppState === 'active') {
           const store = await AsyncStorage.getItem('UserTransaction').then((value) => value !== null ? JSON.parse(value) : []);
           const writeToStore = await this.props.actions(addItem(store));
           this.sortUserList();
        } else if(nextAppState === 'background'){
           AsyncStorage.setItem('UserTransaction', JSON.stringify(state.list));
        }
    };

    renderItem = ({ item, index }) => {
        const {list} = this.state;
        return (
            <View>
                {
                    index === 0  ? <ShowDate date = {item.date}/> :
                        list.length === 1 ? <ShowDate date = {item.date}/> :
                            list[index].date !== list[index-1].date ? <ShowDate date = {item.date}/> :
                                null
                }
                <TouchableOpacity onPress={() => Actions.EditItem({transaction: item})}>
                    <TransactionBlock transaction = {item}/>
                </TouchableOpacity>
            </View>
        );
    };


    render() {
        const {list} = this.state;
        return (
            <View style={styles.container}>
                {
                    list.length === 0 ?
                        <WarnText warn={'You do not have a transactions'} />
                        :
                        <FlatList
                            data={list}
                            renderItem={this.renderItem}
                        />
                }
            </View>
        );
    }
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators(addItem, dispatch)
    })
)(MyList);