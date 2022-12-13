import React from 'react';
import styled from 'styled-components/native';

export const imageStyle = {opacity: 0.5};
export const imagePath = require('../../../../assets/bbk-background.png');

const borderTopWidth = props => {
  const {index} = props;
  const isTop = index === 0 || index === 1 || index === 2 || index === 3;
  if (isTop) {
    return '2px';
  } else {
    return '0';
  }
};
const borderBottomWidth = props => {
  const {index} = props;
  const isBottom = index === 8 || index === 9 || index === 10 || index === 11;
  if (isBottom) {
    return '2px';
  } else {
    return '0';
  }
};
const borderLeftWidth = props => {
  const {index} = props;
  const isLeft =
    index === 0 ||
    index === 2 ||
    index === 4 ||
    index === 6 ||
    index === 8 ||
    index === 10;
  if (isLeft) {
    return '2px';
  } else {
    return '0';
  }
};
const borderRightWidth = props => {
  const {index} = props;
  const isRight =
    index === 1 ||
    index === 3 ||
    index === 5 ||
    index === 7 ||
    index === 9 ||
    index === 11;
  if (isRight) {
    return '2px';
  } else {
    return '0';
  }
};

// export const RenderItemContainer = styled.View`
//   flex: 1;
//   margin: 10px;
//   border-top-width: ${borderTopWidth};
//   border-bottom-width: ${borderBottomWidth};
//   border-left-width: ${borderLeftWidth};
//   border-right-width: ${borderRightWidth};

//   border-color: black;
//   border-style: dashed;
// `;

export const SafeAreaContainer = styled.View`
  flex: 1;
`;

export const RenderItemContainer = styled.View`
  flex: 1;
`;
export const BoxRowContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

export const ImageBackgroundView = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
