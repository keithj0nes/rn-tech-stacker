import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {

  render(){
    const { title, description } = this.props.library;
    const { titleStyle } = styles;
    console.log(this.props, 'more props');
    return (
      <CardItem>
        <Text style={titleStyle}>{title}</Text>
      </CardItem>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}


export default connect(null, actions)(ListItem);
