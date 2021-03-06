import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {green, red} from "../../constants/colors";

const TransactionBlock = ({icon, selectId, title, cost}) => (
    <View style={styles.sizeBlock}>
        <View style={styles.positionElements}>
            <View style={styles.positionElementCenter}>
                <Icon name={icon} size={30} color={selectId === 0 ? green : red}/>
            </View>
            <View style={styles.positionElementCenter}>
                <Text style={[styles.styleText, {color: selectId === 0 ? green : red}]}>{title}</Text>
            </View>
            <View style={styles.rightText}>
                <Text style={[styles.styleRightText, {color: selectId === 0 ? green : red}]}>{selectId === 0 ? "+ " : "- "} {cost} UAH</Text>
            </View>
        </View>
    </View>
);

export default TransactionBlock;
