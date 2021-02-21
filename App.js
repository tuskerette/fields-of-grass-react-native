import * as React from 'react';
import { Audio } from 'expo-av';
import styled from 'styled-components/native';

export default function App() {

  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/wind.mp3')
    );
    setSound(sound);

    await sound.playAsync(); }

  var grassBlades = [];
  for (let i = 0; i < 400; i++) {
    grassBlades.push(
      <GrassBlade key={i} onPress={playSound}>&nbsp;</GrassBlade>
    );
  }

  return (
    <StyledView>
      {grassBlades}
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

const GrassBlade = styled.Text`
  background-color: #4d9c0c;
  padding-top: 80px;
  padding-left: 10px;
  margin: 12px;
`;
