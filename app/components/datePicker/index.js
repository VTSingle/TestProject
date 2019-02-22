import React from 'react';
import { Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './style';
import {green} from "../../constants/colors";

class Date extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date:''
        }
    }

    componentDidMount(){
        const {date}=this.props;
        this.setState({date: date})
    }

    handleChangeDate = (date) => {
        this.setState({date: date});
        this.props.onChangesDate(date);
    };

    render() {
        const { title } = this.props;
        const { date } = this.state;
        return (
            <View>
                <Text style={styles.styleText}>{title}</Text>
                <DatePicker
                    style={styles.widthDatePicker}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon = {false}
                    customStyles={{
                        dateInput: {
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            margin: 10,
                            marginTop: 0,
                            borderBottomColor: green
                        }
                    }}
                    onDateChange={(date) => this.handleChangeDate(date)}
                />
            </View>
        );
    }
}

export default Date;