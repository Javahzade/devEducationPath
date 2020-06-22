import React from 'react';
import Svg, {Rect, G, Path, Line, Circle} from 'react-native-svg';

export const SvgImage = ({path}) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 1600 800">
      <Rect fill="#071e3d" width="1600" height="800" />
      <G>
        {path.map((item, index) => {
          return <Path fill={item.fill} d={item.d} key={index} />;
        })}
      </G>
    </Svg>
  );
};

export const SvgLine = () => {
  return (
    <Svg height="2" width="100%">
      <Line x1="10%" x2="90%" stroke="white" strokeWidth="3" />
    </Svg>
  );
};

export const SvgLogOutIcon = ({path}) => {
  return (
    <Svg
      width="24"
      height="24"
      style = {{transform: [{rotate: '-180deg'}]}}
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-log-out"
      viewBox="0 0 24 24"
    >
      {path.map(item => {return <Path d={item.d} />})}
    </Svg>
  );
}

