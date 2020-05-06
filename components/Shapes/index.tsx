import * as React from 'react';
import Svg, { G, Circle } from 'react-native-svg';

function Shapes(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={467} height={745} viewBox="0 0 467 745" {...props}>
      <G transform="translate(.5 .5)" fill="none" stroke="#dfdfe4" strokeMiterlimit={10}>
        <Circle cx={57.5} cy={57.5} r={57.5} transform="translate(351 138)" opacity={0.5} />
        <Circle
          data-name="Oval"
          cx={17}
          cy={17}
          r={17}
          transform="translate(241 229)"
          opacity={0.5}
        />
        <Circle
          data-name="Oval"
          cx={17}
          cy={17}
          r={17}
          transform="translate(195 587)"
          opacity={0.5}
        />
        <Circle
          data-name="Oval"
          cx={31.5}
          cy={31.5}
          r={31.5}
          transform="translate(96 681)"
          opacity={0.5}
        />
        <Circle
          data-name="Oval"
          cx={7.5}
          cy={7.5}
          r={7.5}
          transform="translate(181 109)"
          opacity={0.5}
        />
        <Circle
          data-name="Oval"
          cx={7.5}
          cy={7.5}
          r={7.5}
          transform="translate(337 385)"
          opacity={0.5}
        />
        <Circle
          data-name="Oval"
          cx={49.5}
          cy={49.5}
          r={49.5}
          transform="translate(31)"
          opacity={0.5}
        />
        <Circle
          data-name="Oval"
          cx={49.5}
          cy={49.5}
          r={49.5}
          transform="translate(347 558)"
          opacity={0.5}
        />
        <Circle
          data-name="Oval"
          cx={27.5}
          cy={27.5}
          r={27.5}
          transform="translate(0 509)"
          opacity={0.5}
        />
        <Circle data-name="Oval" cx={9} cy={9} r={9} transform="translate(187 496)" opacity={0.5} />
        <Circle
          data-name="Oval"
          cx={17}
          cy={17}
          r={17}
          transform="translate(81 280)"
          opacity={0.5}
        />
      </G>
    </Svg>
  );
}

export default Shapes;
