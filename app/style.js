import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: 'grey',
        height: window.height * 0.08,
        zIndex: 1,
        elevation: 10,
        borderTopColor: 'red',
        borderTopWidth: 0,
        shadowColor: 'rgba(10, 10, 10, 0.4)',
        shadowOpacity: 0.75,
        shadowRadius: 1,
        shadowOffset: { height: 0, width: 0 },
    },

    safeArea: {
        flex: 1,
        backgroundColor: 'grey'
    }
});
export default styles;