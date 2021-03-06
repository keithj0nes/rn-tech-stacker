import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { CardItem } from './common';

import ListItem from './ListItem';

class LibraryList extends React.Component {

  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library){
    return <ListItem library={library}/>
  }

  render(){
    console.log(this.props);
    return (
      <View>
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />

      </View>

    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries}
}

export default connect(mapStateToProps)(LibraryList);
