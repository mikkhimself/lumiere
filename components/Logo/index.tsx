import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props} width={40} height={23.977} viewBox="0 0 24 23.977">
      <Path
        d="M18 20.976a1.5 1.5 0 00-3 0v2.25a.75.75 0 01-.751.751H.75a.749.749 0 01-.75-.751v-2.25a3 3 0 013-3h3V.75A.749.749 0 016.75 0h16.5a.75.75 0 01.75.75v20.226a3 3 0 11-6 0z"
        fill="#7540ee"
      />
    </Svg>
  );
}

export default Logo;
