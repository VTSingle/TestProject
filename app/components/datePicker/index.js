import React from 'react';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './style';
import {green} from "../../constants/colors";

class Date extends React.Component {

    handleChangeDate = (date) => {
        this.props.onChangesDate(date);
    };

    render() {
        const {title, date} = this.props;
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
                    showIcon={false}
                    customStyles={{
                        dateInput: {
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            margin: 10,
                            marginTop: 0,
                            borderBottomColor: green
                        }
                    }}
                    onDateChange={this.handleChangeDate}
                />
            </View>
        );
    }
}

export default Date;