import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import styled from 'styled-components';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { getNativeSourceAndFullInitialStatusForLoadAsync } from 'expo-av/build/AV';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/wind.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  var blades = [];
  for (let i = 0; i < 400; i++) {
    blades.push(
      <Blade key={i} onClick={playSound}>&nbsp;</Blade>
    );
  }

  return (
    <Wrapper>
      {blades}
    </Wrapper>
  );
}

const Blade = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 120px solid #4d9c0c;
  font-size: 1em;
  margin: 1.2em;
`;

const Wrapper = styled.section`
  display: flex;
  background-color: #af9a0d;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`;
