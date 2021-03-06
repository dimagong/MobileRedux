import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { Header, Layout, ImageCard, SearhBar } from '../components/uikit';
import { STARGATE_DETAILS } from '../routes';
import { BLUE } from '../../constants';
import {SearchChange, getMovies} from '../actions'

//const url = 'http://api.tvmaze.com/search/shows?q=stargate';

class HomeScreen extends Component {
  state = {
    title: 'STAR GATE',
    //data: [],
    visibleSearchBar: false,
    value: 'movie'
  };

  // componentDidMount = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const { navigation } = this.props;
  //     const data = await response.json();
  //     console.log('DatA', data);
  //     this.setState({ data: data });
  //   } catch (e) {
  //     throw e;
  //   }
  // };

  _onChangeText = (text) => {
    //console.log('onChangeText', this);
   // console.log('text', text);
    // this.setState({
    //   value: text
    // })
    this.props.SearchChange(text);
    this.props.getMovies(text);
  }

  render() {
    //const { title, data, visibleSearchBar } = this.state; // refused data from the state !!!
    const { title, visibleSearchBar } = this.state;
    //const { navigation, movie } = this.props;
    const { navigation, movie, data } = this.props;    //this data was recived from store, not state !!!!
    //console.log('this.state.data', this.state.data);
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
              value={movie}
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
                  navigation.navigate(STARGATE_DETAILS, item.show)
                }
              />);
          })}
        </Layout>
      </View>
    );
  }
}

const mapStateToProps = state =>{
  return {
    movie: state.search.movie,
    data: state.search.data
  }
}

export default connect(mapStateToProps, {SearchChange, getMovies})(HomeScreen)