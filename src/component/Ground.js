import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import ground from '../../images/ground.png'
import {W, H} from '../constants'

export default class Ground extends React.Component {
  render() {
    return (
        <Image
             source={ground} 
             style={{
                position: "absolute",
                left: this.props.x * W,
                top: this.props.y * H,
                width: this.props.width * W,
                height: this.props.height * H
              }}/>
    );
  }
}
