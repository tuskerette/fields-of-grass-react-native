import React from 'react';
import { View, Text, } from 'react-native';
import styled from 'styled-components/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const StyledGrassBlade = styled.Text`
  background-color: #4d9c0c;
  padding-top: 180px;
  padding-left: 52px;
  margin: 12px;
`;

const LeftActions = () => {
  return(
    <StyledGrassBlade>&nbsp;
    </StyledGrassBlade>
  )
}

const RightActions = () => {
  return(
    <StyledGrassBlade>&nbsp;</StyledGrassBlade>
  )
}

const GrassBlade = ({ LeftSwipe, RightSwipe }) => (
  <Swipeable
    renderLeftActions={LeftActions}
    renderRightActions={RightActions}
    onSwipeableLeftOpen={LeftSwipe}
    onSwipeableRightOpen={RightSwipe}
  >
    <StyledGrassBlade>&nbsp;</StyledGrassBlade>
  </Swipeable>
);

export default GrassBlade;
