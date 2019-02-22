import React, { Component } from 'react';
import {View, FlatList, TouchableOpacity, AsyncStorage} from 'react-native';
import {Actions} from "react-native-router-flux";
import styles from './style';
import {connect} from "react-redux";
import ShowDate from '../../components/showDate';
import TransactionBlock from '../../components/transactionBlock';

class MyList extends Component {

    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    sortUserList(){
        const {state} = this.props;
        AsyncStorage.getItem('UserTransaction').then((value) => console.warn("test async storage ", JSON.parse(value)));
        this.setState({list: state.list.sort((a,b) => new Date(a.date) - new Date(b.date))})
    }

    componentDidMount(){
        this.sortUserList();
    }

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
                <FlatList
                    data={list}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

export default connect(state => ({
        state: state
    })
)(MyList);