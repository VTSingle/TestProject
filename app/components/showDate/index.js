import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import moment from 'moment';

const ShowDate = (props) => (
    <View style={styles.styleDate}>
        <Text style={styles.styleText}>{moment(props.date).format('ll')}</Text>
    </View>
);

export default ShowDate;
