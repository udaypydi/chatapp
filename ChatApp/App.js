/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import ChatScreen from './components/chatscreen/chatscreen.component';

const App = (props) => (
  <View style={{ flex: 1 }}>
      <ChatScreen />
  </View>
)

export default App;
