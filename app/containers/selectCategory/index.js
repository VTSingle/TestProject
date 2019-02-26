import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import styles from './style';
import {openModal} from '../../actions/userActions/index';
import {green} from "../../constants/colors/index";

class selectCategory extends React.Component {

    constructor() {
        super();
        this.state = {
            selectCategory: {}
        }
    }

    componentDidMount() {
        const {selectCategory} = this.props;
        this.setState({selectCategory})
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {...prevState, selectCategory: nextProps.state.selectCategory}
    }

    pressSelectCategory = () => {
        this.props.actions(openModal())
    };

    render() {
        const {selectCategory} = this.state;
        return (
            <View style={styles.positionElements}>
                <View style={styles.positionAddButton}>
                    <TouchableOpacity onPress={this.pressSelectCategory}>
                        <Icon name="plus-circle" size={30} color={green}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.positionText}>
                    <Text style={styles.styleText}>{selectCategory.title}</Text>
                </View>
            </View>
        );
    }
}

export default connect(state => ({state}),
    (dispatch) => ({
        actions: bindActionCreators(openModal, dispatch)
    })
)(selectCategory);