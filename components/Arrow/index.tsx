import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={25} height={12.828} viewBox="0 0 25 12.828" {...props}>
      <G
        fill="none"
        stroke="#ff7052"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <Path data-name="Path 2" d="M6 1.414l-5 5 5 5" />
        <Path data-name="Path 3" d="M2 6.414h22" />
      </G>
    </Svg>
  );
}

export default Arrow;
