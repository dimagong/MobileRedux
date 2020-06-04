
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, TextInput} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {w, BLUE} from '../../../constants';
//import { TextInput } from 'react-native-gesture-handler';

const SearhBar = ({
  iconRight,
  colorRight,
  onPressRigh,
  onChangeText,
  placeholder,
  value,
  onBlur
}) => {
  const {container, sub, iconRightStyle, inputStyle, searchStyle} = styles;
  return (
      <View style={container}>
          <View style={sub}>
              <TextInput
                  style={inputStyle}
                  onChangeText={onChangeText}
                  placeholder={placeholder}
                  value={value}
                  onBlur={onBlur}
              />
              <TouchableOpacity onPress={onPressRigh}>
                  <View style={searchStyle}>
                      <MaterialCommunityIcons
                          name={iconRight}
                          style={[iconRightStyle, { color: colorRight }]}
                      />
                  </View>
              </TouchableOpacity>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 20,
    backgroundColor: BLUE,
    position: 'relative',
    ...ifIphoneX(
      {
        height: 122,
      },
      {
        height: 90,
      },
    ),
  },
  sub: {
    justifyContent: 'space-between',
    marginTop: 40, 
    alignItems: 'center',
    flexDirection: 'row',
    width: w - 35,
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 20,
  },
  inputStyle: {
    fontSize: 18,
    height: 40,
    width: w - 90,
    marginLeft: 15,
    backgroundColor: '#fff',
    //color: 'blue',
  },
  searchStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  iconRightStyle: {
    
    fontSize: 30,
    marginTop: 2,
  },
});

export {SearhBar};
