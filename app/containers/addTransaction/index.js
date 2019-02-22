import React from 'react';
import {View, AsyncStorage} from 'react-native';
import {Actions} from "react-native-router-flux";
import SelectCategory from '../../components/selectCategory';
import ChoseMoney from '../../components/costInput';
import Input from '../../components/input';
import DatePicker from '../../components/datePicker';
import Button from '../../components/buttonCustom';
import styles from './style';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {addItem} from "../../actions/userActions";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            cost: '',
            description: '',
            date: ''
        }
    }

    handleValue = (cost) => {
        this.setState({cost: cost})
    };

    handleDescription = (description) => {
        this.setState({description: description})
    };

    handleDate = (date) => {
        this.setState({date: date})
    };

    sendTransaction = async () => {
        const {state} = this.props;
        const result = await this.props.actions(addItem(Object.assign(this.state, state.selectCategory, {key: Math.random().toString(36)})));
        await AsyncStorage.setItem('UserTransaction', JSON.stringify(result.payload.payload));
        Actions.MyInfo();
    };

    render() {
        const {state} = this.props;
        const {cost, date} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.topBackground}>
                    <View style={styles.positionRowElements}>
                        <SelectCategory selectCategory={''}/>
                        <ChoseMoney cost={''} onChangesValue={this.handleValue}/>
                    </View>
                    { state.selectCategory.title !== '' && cost !== '' && date !== '' ?
                        <Button title={'Add transaction'} onButtonPress={this.sendTransaction}/>
                        : null
                    }
                </View>
                <Input title = {'Description'} value = {''} onChangesDescription={this.handleDescription}/>
                <DatePicker title = {'Select date'} date = {''} onChangesDate={this.handleDate}/>
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
)(App);
