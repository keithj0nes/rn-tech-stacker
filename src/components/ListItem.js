import React from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {

  componentWillUpdate(){
    LayoutAnimation.configureNext(CustomLayoutSpring);
  }

  renderDescription(){
    const { library, expanded } = this.props;

    if(expanded){
      return (
        <CardItem>
          <Text style={styles.expandedTextStyle}>{library.description}</Text>

        </CardItem>
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
  },
  expandedTextStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
}

const CustomLayoutSpring = {
duration: 400,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 0.7,
  },
  update: {
    type: LayoutAnimation.Types.spring,

    springDamping: 0.7,
  },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);
