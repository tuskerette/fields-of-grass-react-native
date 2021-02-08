import * as React from 'react';
// import { Audio } from 'expo-av';
import styled from 'styled-components/native';
import GrassBlade from './grassBlade';

export default function App() {
  // const [sound, setSound] = React.useState();

  // async function playSound() {
  //   const { sound } = await Audio.Sound.createAsync(
  //     require('./assets/wind.mp3')
  //   );
  //   setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.playAsync(); }

  // var grassBlades = [];
  // for (let i = 0; i < 400; i++) {
  //   grassBlades.push(
  //     <GrassBlade key={i} onPress={playSound}>&nbsp;</GrassBlade>
  //   );
  // }

  return (
    <StyledView>
      {/* <GrassBlade onPress={playSound}>&nbsp;</GrassBlade> */}
      <GrassBlade />
      <GrassBlade />
      <GrassBlade />
      <GrassBlade />
    </StyledView>
  );
}

const StyledView = styled.View`
  display: flex;
  background-color: #af9a0d;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
`;
