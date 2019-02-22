import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openModal } from '../../actions/userActions';
import {green} from "../../constants/colors";

class selectCategory extends React.Component {

    constructor(){
        super();
        this.state = {
            selectCategory: {}
        }
    }

    componentDidMount(){
        const {selectCategory}=this.props;
        this.setState({selectCategory: selectCategory})
    }

    componentWillReceiveProps(props) {
        this.setState({selectCategory: props.state.selectCategory});
    }

    pressSelectCategory(){
        this.props.actions(openModal())
    }

    render() {
        const {selectCategory} = this.state;
        return (
            <View style={styles.positionElements}>
                <View style={styles.positionAddButton}>
                    <TouchableOpacity onPress = {() => this.pressSelectCategory()}>
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

export default connect(state => ({
        state: state
    }),
    (dispatch) => ({
        actions: bindActionCreators(openModal, dispatch)
    })
)(selectCategory);