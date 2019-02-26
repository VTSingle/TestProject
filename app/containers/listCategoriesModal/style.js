import { StyleSheet} from 'react-native';
import {width, height} from "../../constants/widthAndHeight/index";
import {green, background, black} from "../../constants/colors/index";

const styles = StyleSheet.create({
    modalStyle: {
        backgroundColor: background,
        borderRadius: 8,
        margin: width * 0.05,
        marginTop: width * 0.4,
        position: "absolute",
        height: height * 0.4,
        width: width * 0.9,
        shadowOpacity: 0.75,
        shadowRadius: 1,
        zIndex: 1,
        elevation: 3,
        shadowColor: black,
        shadowOffset: { height: 0, width: 0 }
    },
    rowText: {
        padding: 10,
        flexDirection: 'row'
    },
    textDefault: {
        paddingLeft: 10,
        fontSize: width * 0.05,
        color: black
    },
    textSelect: {
        paddingLeft: 10,
        fontSize: width * 0.05,
        color: green
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    styleBlock: {
        flexDirection: 'column',
        width: width * 0.3,
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default styles;