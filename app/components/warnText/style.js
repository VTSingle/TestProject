import {StyleSheet} from 'react-native';
import {width} from "../../constants/widthAndHeight";

const styles = StyleSheet.create({
    textMiddle: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlignVertical: 'center',
        alignItems: 'center'
    },

    textSize: {
        fontSize: width * 0.05
    },
});
export default styles;