import { CircularProgress } from "@chakra-ui/react";
import { useState } from "react";
import { useAnimationFrame } from "@etherTrack/lib/hooks";
import { DonutChartProps } from "@etherTrack/types";

/**
 * Animated Donut Chart that shows the percentage of a value
 * @param vlaue The numeric value to be illustrated
 * @param sx OPTIONAL styling options
 */
export const DonutChart: React.FC<DonutChartProps> = ({ value, sx }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useAnimationFrame((deltaTime: number) => {
    // Pass on a function to the setter of the state
    // to make sure we always have the latest state
    setCurrentValue(
      (prevValue) =>
        (prevValue >= value ? prevValue : prevValue + deltaTime * 0.1) % 100
    );
  });

  // The animation should stop when value is reached
  return (
    <CircularProgress
      {...sx}
      value={currentValue <= value ? currentValue : currentValue}
    />
  );
};
