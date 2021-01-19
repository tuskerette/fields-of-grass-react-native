import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import styled from 'styled-components/native'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { getNativeSourceAndFullInitialStatusForLoadAsync } from 'expo-av/build/AV';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/wind.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  var blades = [];
  for (let i = 0; i < 400; i++) {
    blades.push(
      <Blade key={i} onPress={playSound}>&nbsp;</Blade>
    );
  }

  return (
    <StyledView>
      {blades}
    </StyledView>
  );
}

const Blade = styled.Text`
  background-color: #4d9c0c;
  padding-top: 80px;
  padding-left: 10px;
  margin: 12px;
`;

const StyledView = styled.View`
  display: flex;
  background-color: #af9a0d;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`;


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
