import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen1 from './src/screen1';
//import Screen2 from './src/screen2';
//import Screen3 from './src/screen3';
import {STARGATE_HOME, BATMAN_HOME, SPIDER_HOME} from './src/routes';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BLUE} from './constants';

//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    console.log('App props', this.props);
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={STARGATE_HOME}
          drawerContentOptions={{
            activeTintColor: BLUE,
            contentContainerStyle: {marginVertical: 30},
          }}>
          {console.log('DRAWER props', this.props)}
          <Drawer.Screen
            name={STARGATE_HOME}
            component={Screen1}
            options={{
              drawerLabel: 'STARGATE',
              drawerIcon: ({tintColor}) => (
                <MaterialIcons name="grade" size={24} style={{color: BLUE}} />
              ),
            }}
          />
          {/* <Drawer.Screen
            name={BATMAN_HOME}
            component={Screen2}
            options={{
              drawerLabel: 'BATMAN',
              drawerIcon: () => (
                <MaterialIcons
                  name="favorite"
                  size={24}
                  style={{color: BLUE}}
                />
              ),
            }}
          /> */}
          {/* <Drawer.Screen
            name={SPIDER_HOME}
            component={Screen3}
            options={{
              drawerLabel: 'SPIDER',
              drawerIcon: () => (
                <MaterialIcons name="pets" size={24} style={{color: BLUE}} />
              ),
            }}
          /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

//////                            Tab-NAVIGATION                    ///////
// return (
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused}) => {
//           let iconName;
//           if (route.name === STARGATE_HOME) {
//             iconName = focused ? 'ios-add-circle' : 'ios-play';
//           } else if (route.name === BATMAN_HOME) {
//             iconName = focused ? 'ios-add-circle' : 'ios-play';
//           } else if (route.name === SPIDER_HOME) {
//             iconName = focused ? 'ios-add-circle' : 'ios-play';
//           }
//           return <Ionicons name={iconName} size={25} color={BLUE} />;
//         },
//       })}
//       tabBarOptions={{
//         //activeTintColor: 'tomato',
//         activeTintColor: BLUE,
//         inactiveTintColor: 'gray',
//       }}>
//       {console.log('TAB props', this.props)}
//       <Tab.Screen name={STARGATE_HOME} component={Screen1} />
//       <Tab.Screen name={BATMAN_HOME} component={Screen2} />
//       <Tab.Screen name={SPIDER_HOME} component={Screen3} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
