import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {

  renderDescription(){
    const { library, selectedLibraryId } = this.props;

    if(library.id === selectedLibraryId){
      return (
        <Text>{library.description}</Text>
      )
    }
  }

  render(){
    const { id, title, description } = this.props.library;
    const { titleStyle } = styles;
    console.log(this.props, 'more props');
    return (
      <TouchableWithoutFeedback onPress={()=>this.props.selectLibrary(id)}>
        <View>
          <CardItem>
            <Text style={titleStyle}>{title}</Text>
          </CardItem>
          {this.renderDescription()}
        </View>


      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);
