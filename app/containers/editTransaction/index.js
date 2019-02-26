import React from 'react';
import {View} from 'react-native';
import {Actions} from "react-native-router-flux";
import SelectCategory from '../selectCategory';
import ChoseMoney from '../../components/costInput';
import Input from '../../components/input';
import DatePicker from '../../components/datePicker';
import Button from '../../components/buttonCustom';
import DeleteTransaction from '../../components/deleteTransaction';
import styles from './style';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {editItem, updateSelectCategory, deleteItem} from "../../actions/userActions";

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            cost: '',
            description: '',
            date: '',
            selectCategory: {},
            selectId: 0
        }
    }

    componentDidMount() {
        const {transaction}=this.props;
        this.props.actionsUpdateCategory(updateSelectCategory({icon: transaction.icon, title: transaction.title, selectId: transaction.selectId}));
        this.setState({
            cost: transaction.cost,
            description: transaction.description,
            date: transaction.date,
            selectCategory: {icon: transaction.icon, title: transaction.title},
            selectId: transaction.selectId
        })
    }

    handleValue = (cost) => {
        this.setState({cost})
    };

    handleDescription = (description) => {
        this.setState({description})
    };

    handleDate = (date) => {
        this.setState({date})
    };

    handleDelete = () => {
        const {transaction} = this.props;
        this.props.actionsDeleteItem(deleteItem(transaction.key));
        Actions.MyInfo();
    };

    sendTransaction = async () => {
        const {selectCategory} = this.state;
        const {state, transaction} = this.props;

        const run_one = state.selectCategory.icon === '' ?
            await this.props.actionsUpdateItem(editItem({...this.state, ...selectCategory}, transaction.key)) :
            await this.props.actionsUpdateItem(editItem({...this.state, ...state.selectCategory}, transaction.key));

        Actions.MyInfo();
    };

    render() {
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
                <Input title = {'Description'} description = {description} onChangesDescription={this.handleDescription}/>
                <DatePicker title = {'Select date'} date = {date} onChangesDate={this.handleDate}/>
                <DeleteTransaction title = {'Delete Transaction'} onPressDelete={this.handleDelete}/>
            </View>
        );
    }
}

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actionsUpdateItem: bindActionCreators(editItem, dispatch),
        actionsUpdateCategory: bindActionCreators(updateSelectCategory, dispatch),
        actionsDeleteItem: bindActionCreators(deleteItem, dispatch)
    })
)(App);
