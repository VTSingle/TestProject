import React from 'react';
import {View} from 'react-native';
import {Actions} from "react-native-router-flux";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import SelectCategory from '../selectCategory';
import ChooseMoney from '../../components/costInput';
import Input from '../../components/input';
import DatePicker from '../../components/datePicker';
import Button from '../../components/buttonCustom';
import styles from './style';
import {addItem} from "../../actions/userActions";

class App extends React.Component {

    state = {
        cost: '',
        description: '',
        date: ''
    };

    handleValue = (cost) => {
        this.setState({cost})
    };

    handleDescription = (description) => {
        this.setState({description})
    };

    handleDate = (date) => {
        this.setState({date})
    };

    sendTransaction = async () => {
        const {state} = this.props;
        const result = await this.props.actions(addItem({...this.state, ...state.selectCategory, ...{key: Math.random().toString(36)}}));
        Actions.MyInfo();
    };

    render() {
        const {state} = this.props;
        const {cost, date, description} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.topBackground}>
                    <View style={styles.positionRowElements}>
                        <SelectCategory selectCategory={''}/>
                        <ChooseMoney cost={cost} onChangesValue={this.handleValue}/>
                    </View>
                    {
                        state.selectCategory.title !== '' && cost !== '' && date !== '' ?
                            <Button title={'Add transaction'} onButtonPress={this.sendTransaction}/>
                            : null
                    }
                </View>
                <Input title={'Description'} value={description} onChangesDescription={this.handleDescription}/>
                <DatePicker title={'Select date'} date={date} onChangesDate={this.handleDate}/>
            </View>
        );
    }
}

export default connect(state => ({state}),
    (dispatch) => ({
        actions: bindActionCreators(addItem, dispatch)
    })
)(App);

