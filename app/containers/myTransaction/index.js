import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity, AsyncStorage, AppState} from 'react-native';
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import styles from './style';
import ShowDate from '../../components/showDate';
import TransactionBlock from '../../components/transactionBlock';
import WarnText from '../../components/warnText';
import {updateList} from "../../actions/userActions";

class MyList extends Component {

    state = {
        list: []
    };

    sortUserList = () => {
        const {state} = this.props;
        const list = state.list.sort((a, b) => new Date(a.date) - new Date(b.date));
        this.setState({list});
    };

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
        this.sortUserList();
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = async (nextAppState) => {
        const {state} = this.props;
        if (nextAppState === 'active') {
            const store = await AsyncStorage.getItem('UserTransaction').then((value) => value !== null ? JSON.parse(value) : {});
            const writeToStore = store.length === 0 ? [] : await this.props.actions(updateList(store));
            this.sortUserList();
        } else if (nextAppState === 'inactive') {
            AsyncStorage.setItem('UserTransaction', JSON.stringify(state.list));
        }
    };

    renderItem = ({item, index}) => {
        const {list} = this.state;
        return (
            <View>
                {
                    index === 0 ? <ShowDate date={item.date}/> :
                        list.length === 1 ? <ShowDate date={item.date}/> :
                            list[index].date !== list[index - 1].date ? <ShowDate date={item.date}/> :
                                null
                }
                <TouchableOpacity onPress={() => Actions.EditItem({transaction: item})}>
                    <TransactionBlock transaction={item}/>
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
                        <WarnText warn={'You do not have a transactions'}/>
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

export default connect(state => ({state}),
    (dispatch) => ({
        actions: bindActionCreators(updateList, dispatch)
    })
)(MyList);