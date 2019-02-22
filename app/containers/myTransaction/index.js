import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, AsyncStorage} from 'react-native';
import {Actions} from "react-native-router-flux";
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import {connect} from "react-redux";
import {green, red} from "../../constants/colors";

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
                    index === 0 && item.date !== '' ?
                        <View style={styles.styleDate}>
                            <Text style={styles.styleText}>{moment(item.date).format('ll')}</Text>
                        </View> :
                        list.length === 1 ? <View style={styles.styleDate}>
                                <Text style={styles.styleText}>{item.date !== '' ? moment(item.date).format('ll') : null}</Text>
                            </View> :
                            list[index].date !== list[index-1].date && item.date !== '' ?
                                <View style={styles.styleDate}>
                                    <Text style={styles.styleText}>{moment(item.date).format('ll')}</Text>
                                </View> :
                                null
                }
                <TouchableOpacity onPress={() => Actions.EditItem({transaction: item})}>
                    <View style={styles.sizeBlock}>
                        <View style={styles.positionElements}>
                            <View style = {styles.positionElementCenter}>
                                <Icon name={item.icon} size={30} color={item.selectId === 0 ? green : red}/>
                            </View>
                            <View style = {styles.positionElementCenter}>
                                <Text style={[styles.styleText, {color: item.selectId === 0 ? green : red}]}>{item.title}</Text>
                            </View>
                            <View style = {styles.rightText}>
                                <Text style={[styles.styleRightText, {color: item.selectId === 0 ? green : red}]}>{item.selectId === 0 ? "+ " : "- "} {item.cost} UAH</Text>
                            </View>
                        </View>
                    </View>
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