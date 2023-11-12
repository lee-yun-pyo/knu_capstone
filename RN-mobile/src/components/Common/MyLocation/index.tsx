import Svg, { Circle } from "react-native-svg";

export function MyLocation() {
  return (
    <Svg height="100" width="100">
      <Circle
        cx="50"
        cy="50"
        r="9"
        fill="#007BFF"
        stroke="#FFFFFF"
        strokeWidth="4"
      />
    </Svg>
  );
}
