import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DelailsScreen';
import {STARGATE_HOME, STARGATE_DETAILS} from '../routes';

const Stack = createStackNavigator();

const Screen1 = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={STARGATE_HOME}
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#f4511e'},
        }}
      />
      <Stack.Screen
        name={STARGATE_DETAILS}
        component={DetailScreen}
        options={{
          headerStyle: {backgroundColor: '#f4511e'},
        }}
      />
    </Stack.Navigator>
    //</NavigationContainer>
  );
};
export default Screen1;

// export default createStackNavigator(
//   {
//     [STARGATE_HOME]: HomeScreen,
//   },
//   {
//     headerMode: 'none',
//   },
// );
