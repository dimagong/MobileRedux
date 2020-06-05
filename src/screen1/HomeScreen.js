import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Header, Layout, ImageCard, SearhBar } from '../components/uikit';
import { STARGATE_DETAILS } from '../routes';
import { BLUE } from '../../constants';
import {SearchChange} from '../actions'

const url = 'http://api.tvmaze.com/search/shows?q=stargate';

class HomeScreen extends Component {
  state = {
    title: 'STAR GATE',
    data: [],
    visibleSearchBar: false,
    value: 'movie'
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const { navigation } = this.props;
      const data = await response.json();
      console.log('DatA', data);
      this.setState({ data: data });
    } catch (e) {
      throw e;
    }
  };

  _onChangeText = (text) => {
    console.log('onChangeText', this);
    console.log('text', text);
    this.setState({
      value: text
    })
  }

  render() {
    const { title, data, visibleSearchBar } = this.state;
    const { navigation } = this.props;
    console.log('this.state.data', this.state.data);
    console.log('this.props HomeScreen', this.props);
    return (
      <View>
        {
          visibleSearchBar ?
            <SearhBar
              colorRight={'#fff'}
              iconRight='magnify'
              placeholder='Search'
              onChangeText={this._onChangeText}
              value={this.value}
              onPressRigh={() => this.setState({visibleSearchBar: false} )}
              onBlur={() => {this.setState({visibleSearchBar: true});  console.log('onBlur') } }
            />
            :
            <Header
              title={title}
              colorRight={'#fff'}
              iconRight="magnify"
              onPress={() => navigation.openDrawer()}
              onPressRigh={() => this.setState({visibleSearchBar: true})}
            />
        }
        
        <Layout>
          {data.map(item => {
            return (
              <ImageCard
                data={item.show}
                key={item.show.id}
                onPress={() =>
                  navigation.navigate(STARGATE_DETAILS, item.show
                    //    {
                    //   show: item.show,
                    //   onGoBack: this.onGoBack,
                    // }
                  )
                }
              />);
          })}
        </Layout>
      </View>
    );
  }
}

export default connect(null, {SearchChange})(HomeScreen)