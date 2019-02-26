import {StyleSheet} from 'react-native';
import {width} from "../../constants/widthAndHeight/index";
import {green} from "../../constants/colors/index";

const styles = StyleSheet.create({
    positionAddButton: {
        padding: 10
    },
    positionElements: {
        flex:1,
        width: width * 0.4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    positionText: {
        paddingLeft: 10
    },
    styleText: {
        color: green,
        fontSize: width * 0.05,
    }
});
export default styles;