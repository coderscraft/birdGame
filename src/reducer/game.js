import {moveSprite, sprites} from '../sprites'

const initialState = {
    score: 0,
    gameOver: false,
    isStarted: false,
    sprites
  };


  export default (state = initialState, action) => {
      switch(action.type) {
          case 'TICK':
            return {
                ...state,
                sprites: moveSprite(state.sprites, action.elapsedTime)
            }
          default:
            return state;
      }
  }