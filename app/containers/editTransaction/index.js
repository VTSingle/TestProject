import React from 'react';
import {View} from 'react-native';
import {Actions} from "react-native-router-flux";
import SelectCategory from '../../components/selectCategory';
import ChoseMoney from '../../components/costInput';
import Input from '../../components/input';
import DatePicker from '../../components/datePicker';
import Button from '../../components/buttonCustom';
import DeleteTransaction from '../../components/deleteTransaction';
import styles from './style';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {editItem} from "../../actions/userActions";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            cost: '',
            description: '',
            date: '',
            selectCategory: {}
        }
    }

    componentDidMount() {
        const {transaction}=this.props;
        this.setState({
            cost: transaction.cost,
            description: transaction.description,
            date: transaction.date,
            selectCategory: {icon: transaction.icon, title: transaction.title}
        })
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
        const {cost, description, date, selectCategory} = this.state;
        const {state, transaction} = this.props;

        const run_one = state.selectCategory.icon === '' ?
            await this.props.actions(editItem({cost: cost, description: description, date: date, key: transaction.key, icon: selectCategory.icon, title: selectCategory.title, selectId: transaction.selectId}, transaction.key)) :
            await this.props.actions(editItem({cost: cost, description: description, date: date, icon: state.selectCategory.icon, title: state.selectCategory.title, key: transaction.key, selectId: state.selectCategory.selectId}, transaction.key));

        Actions.MyInfo();
    };

    render() {
        const {transaction} = this.props;
        const {selectCategory, date, cost, description} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.topBackground}>
                    <View style={styles.positionRowElements}>
                        <SelectCategory selectCategory={selectCategory}/>
                        <ChoseMoney cost={cost} onChangesValue={this.handleValue}/>
                    </View>
                    <Button title={'Save changes'} onButtonPress={this.sendTransaction}/>
                </View>
                <Input title = {'Description'} value = {description} onChangesDescription={this.handleDescription}/>
                <DatePicker title = {'Select date'} date = {date} onChangesDate={this.handleDate}/>
                <DeleteTransaction key_transaction = {transaction.key}/>
            </View>
        );
    }
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators(editItem, dispatch)
    })
)(App);
