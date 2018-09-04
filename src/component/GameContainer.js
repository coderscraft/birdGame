import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import bg from '../../images/bg.png'
import Ground from './Ground'
import { tick } from '../action'
import { connect } from "react-redux";


export class GameContainer extends React.Component {

    constructor() {
        super();
        this.animationFrameId = null;
        this.time = new Date();
    }

    nextFrame = () => {
        let elapsedTime = new Date() - this.time;
        this.time = new Date();
        this.props.tick(elapsedTime);
        this.animationFrameId = requestAnimationFrame(this.nextFrame);
    }

    start = () => {
        cancelAnimationFrame(this.animationFrameId);
        this.time = new Date();
        this.animationFrameId = requestAnimationFrame(this.nextFrame)
    }


  render() {
    let { ground, ground2 } = this.props;
    return (
        <TouchableOpacity onPress={this.start}
        style={styles.screen}>
            <Image
            source={bg}
            style={[styles.screen, styles.image]}
            />
            <Ground 
                x={ground.position.x}
                y={ground.position.y}
                height={ground.size.height}
                width={ground.size.width}/>
            <Ground 
                x={ground2.position.x}
                y={ground2.position.y}
                height={ground2.size.height}
                width={ground2.size.width}/>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignSelf: "stretch",
      width: null
    },
    image: {
      resizeMode: "cover"
    }
  });

  function mapStateToProps(state) {
    const sprites = state.gameReducer.sprites;
    return {
      ground: sprites[0],
      ground2: sprites[1]
    };
  }

  export default connect(mapStateToProps, {tick})(GameContainer);