import {StyleSheet} from 'react-native';
import {width} from "../../constants/widthAndHeight";
import {red} from "../../constants/colors";

const styles = StyleSheet.create({
    positionAddButton: {
        padding: 10
    },
    positionElements: {
        flex: 1,
        width: width
    },
    rowElements: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    positionText: {
        paddingLeft: 10
    },
    styleText: {
        color: red,
        fontSize: width * 0.04,
    }
});
export default styles;