import {StyleSheet} from 'react-native';
import {width, height} from "../../constants/widthAndHeight";
import {background, grey} from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: background,
    },
    topBackground: {
        height: height * 0.25,
        width: width,
        backgroundColor: grey,
    },
    positionRowElements: {
        flex: 1,
        flexDirection: 'row'
    },
    positionAddContent: {
        marginTop: height * 0.1
    }
});
export default styles;