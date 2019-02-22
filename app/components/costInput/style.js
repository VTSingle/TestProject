import {StyleSheet} from 'react-native';
import {width} from "../../constants/widthAndHeight";
import {green} from "../../constants/colors";

const styles = StyleSheet.create({
    positionAddButton: {
        padding: 10
    },
    positionElements: {
        flex: 1,
        paddingRight: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    styleText: {
        color: green,
        fontSize: width * 0.05,
    },
    styleInput: {
        borderBottomWidth: 1,
        width: width * 0.2,
        borderBottomColor: green
    }
});
export default styles;