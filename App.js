import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { composeWithDevTools } from 'remote-redux-devtools';

import ReduxThunk from 'redux-thunk';
import reducer from './src/reducers'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Screen1 from './src/screen1'
import { STARGATE_HOME, BATMAN_HOME, SPIDER_HOME } from './src/routes'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { BLUE } from './constants'

//const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers(
//   applyMiddleware(ReduxThunk)
// ));
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(ReduxThunk)
));


const Drawer = createDrawerNavigator()

class App extends Component {
  render() {
    console.log('App props', this.props);
    console.log('STORE', store);
    return (
      <Provider store={store} >
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName={STARGATE_HOME}
            drawerContentOptions={{
              activeTintColor: BLUE,
              contentContainerStyle: { marginVertical: 30 },
            }}>
            {console.log('DRAWER props', this.props)}
            <Drawer.Screen
              name={STARGATE_HOME}
              component={Screen1}
              options={{
                drawerLabel: 'STARGATE',
                drawerIcon: ({ tintColor }) => (
                  <MaterialIcons name="grade" size={24} style={{ color: BLUE }} />
                ),
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;