import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
class App extends React.Component {

  render(){
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>HELLO WORLD</Text>
        </View>

      </Provider>

    )
  }
}

export default App;
