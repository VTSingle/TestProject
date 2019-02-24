import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const WarnText = (props) => (
    <View style={styles.textMiddle}>
        <Text style={styles.textSize}>{props.warn}</Text>
    </View>
);

export default WarnText;
