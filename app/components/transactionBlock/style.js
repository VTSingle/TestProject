import {StyleSheet} from 'react-native';
import {width, height} from "../../constants/widthAndHeight";

const styles = StyleSheet.create({
    sizeBlock: {
        width: width,
        height: height * 0.1
    },
    positionElements: {
        flexDirection: 'row',
        flex: 1,
        margin: 20
    },
    positionElementCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightText: {
        justifyContent: 'center',
        flex: 1
    },
    styleText: {
        fontSize: width * 0.05,
        paddingLeft: 10
    },
    styleRightText: {
        fontSize: width * 0.05,
        textAlign: 'right'
    }
});
export default styles;