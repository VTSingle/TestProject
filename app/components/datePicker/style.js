import {StyleSheet} from 'react-native';
import {width, height} from "../../constants/widthAndHeight";
import {green} from "../../constants/colors";

const styles = StyleSheet.create({
    styleText: {
        color: green,
        fontSize: width * 0.05,
        margin: 10
    },
    styleInput: {
        borderBottomWidth: 1,
        margin: 10,
        marginTop: 0,
        height: height * 0.05,
        width: width * 0.8,
        borderBottomColor: green
    },
    widthDatePicker: {
        width: width * 0.85
    },

});
export default styles;