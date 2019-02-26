import React, { Component } from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView } from 'react-native';
import styles from './style';
import { createStore } from 'redux';
import MyInfo from './containers/myTransaction';
import AddInfo from './containers/addTransaction';
import EditItem from './containers/editTransaction';
import ListModal from './containers/listCategoriesModal';
import {iconList, iconAdd} from "./constants/tabIcon";
import coreReducer from './reducers/userInfo';

const store = createStore(coreReducer);

class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const typeRout = "push";
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <Router>
            <Modal key="root" duration = {0}>
              <Scene
                  key="root"
                  tabs={true}
                  hideNavBar
                  headerMode="none"
                  tabBarPosition='bottom'
                  showLabel = {false}
                  tabBarStyle={styles.tabBarStyle}
                  initial
              >
                <Scene icon={iconList} initial>
                  <Scene hideNavBar={true} key="MyInfo" component={MyInfo} panHandlers={null} type = {typeRout}/>
                  <Scene hideNavBar={true} key="EditItem" component={EditItem} panHandlers={null} type = {typeRout}/>
                </Scene>
                <Scene icon={iconAdd}>
                  <Scene hideNavBar={true} key="AddInfo" component={AddInfo} panHandlers={null} type = {typeRout}/>
                </Scene>
              </Scene>
            </Modal>
          </Router>
          <ListModal/>
        </SafeAreaView>
      </Provider>
    )
  }
}

export default App;