import React, {PureComponent} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Header, ImageBigCard} from '../components/uikit';
import {WHITE, BLUE, w} from '../../constants';

export default class DelailsScreen extends PureComponent {
  // componentWillUnmount() {
  //   //const {onGoBack} = this.props.navigation.state.params;
  //   const {onGoBack} = this.props.route.params;
  //   onGoBack && onGoBack('Hello from children');
  // }

  render() {
    //const {show} = this.props.navigation.state.params;
    //const {image, name, summary} = show;
    console.log('this.props DetailScreen', this.props);
    const {image, name, summary} = this.props.route.params;
    const {navigation} = this.props;
    const data = {image};
    const {container, sub, h1, h2} = styles;
    return (
      <View style={container}>
        <Header
          detail
          title={name.toUpperCase()}
          onPressLeft={() => navigation.goBack()}
          iconLeft="ios-arrow-back"
          headerColor={BLUE}
          colorLeft={WHITE}
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: WHITE,
  },
  cover: {
    width: w,
    height: w * 1.5,
    borderRadius: 10,
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15,
  },
});
