import React from 'react';
import { View, Text, Animated } from 'react-native';
import styled from 'styled-components/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const StyledGrassBlade = styled.Text`
  background-color: #4d9c0c;
  padding-top: 180px;
  padding-left: 22px;
  margin: 12px;
`;
const LeftActions = () => {
  return(
    <StyledGrassBlade>&nbsp;</StyledGrassBlade>
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
