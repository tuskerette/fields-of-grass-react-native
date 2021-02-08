import React, { Component } from 'react';
import { Audio } from 'expo-av';
import styled from 'styled-components/native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const StyledGrassBlade = styled.Text`
  background-color: #4d9c0c;
  padding-top: 80px;
  padding-left: 10px;
  margin: 12px;
`;

class GrassBlade extends Component {
    // const [sound, setSound] = React.useState();

    // async function playSound() {
    //     const { sound } = await Audio.Sound.createAsync(
    //     require('./assets/wind.mp3')
    //     );
    //     setSound(sound);

    //     console.log('Playing Sound');
    //     await sound.playAsync(); }

    constructor(props) {
    super(props);
    this.state = {
      gestureName: 'none'
    };
  }


  onSwipeUp(gestureState) {
      console.log("up");
      this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
      console.log("down");
      this.setState({myText: 'You swiped down!'});
  }

  onSwipeLeft(gestureState) {
      console.log("left");
      this.setState({myText: 'You swiped left!'});
  }

  onSwipeRight(gestureState) {
      console.log("right");
      this.setState({myText: 'You swiped right!'});
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        >
        <StyledGrassBlade />
      </GestureRecognizer>
    );
  }
}

export default GrassBlade;

  // TRIANGLE
  // width: 0;
  // height: 0;
  // border-left-width: 10px;
  // border-left-color: transparent;
  // border-right-width: 10px;
  // border-right-color: transparent;
  // border-bottom-width: 120px;
  // border-bottom-color: #4d9c0c;
  // margin: 5px 7px 2px;
