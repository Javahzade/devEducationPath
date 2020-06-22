import React from 'react';
import Svg, {Rect, G, Path} from 'react-native-svg';

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
