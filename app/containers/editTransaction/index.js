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
        const {state, transaction} = this.props;
        state.selectCategory.icon === '' ?
         this.props.actions(editItem(this.state, transaction.key)) :
         this.props.actions(editItem(Object.assign(this.state, state.selectCategory), transaction.key));
        Actions.MyInfo();
    };

    render() {
        const {transaction} = this.props;
        const {selectCategory, date, cost, description}=this.state;
        return (
            cost !== '' ?
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
                </View> : null
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
