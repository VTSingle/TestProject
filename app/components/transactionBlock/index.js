import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {green, red} from "../../constants/colors";

const TransactionBlock = (props) => (
    <View style={styles.sizeBlock}>
        <View style={styles.positionElements}>
            <View style = {styles.positionElementCenter}>
                <Icon name={props.transaction.icon} size={30} color={props.transaction.selectId === 0 ? green : red}/>
            </View>
            <View style = {styles.positionElementCenter}>
                <Text style={[styles.styleText, {color: props.transaction.selectId === 0 ? green : red}]}>{props.transaction.title}</Text>
            </View>
            <View style = {styles.rightText}>
                <Text style={[styles.styleRightText, {color: props.transaction.selectId === 0 ? green : red}]}>{props.transaction.selectId === 0 ? "+ " : "- "} {props.transaction.cost} UAH</Text>
            </View>
        </View>
    </View>
);

export default TransactionBlock;
