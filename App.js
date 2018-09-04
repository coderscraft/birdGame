import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameContainer from './src/component/GameContainer';
import { createStore, combineReducers } from "redux";
import gameReducer from './src/reducer/game';
import { Provider } from "react-redux";
let store = createStore(combineReducers({ gameReducer }));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GameContainer />
       </Provider>
    );
  }
}
