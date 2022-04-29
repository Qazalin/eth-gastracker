import { HStack } from "@chakra-ui/react";
import { GasView } from "@etherTrack/components";
import { GasInfoLayoutProps } from "@etherTrack/types";

export const GasInfoLayout: React.FC<GasInfoLayoutProps> = ({
  SafeGasPrice,
  SafeGasEstimate,
  ProposeGasPrice,
  ProposeGasEstimate,
  FastGasPrice,
  FastGasEstimate,
}) => {
  return (
    <HStack spacing="10px" w="100%" h="50%">
      <GasView
        title="Low"
        gasPrice={SafeGasPrice}
        estimatedTime={SafeGasEstimate}
      />
      <GasView
        title="Average"
        gasPrice={ProposeGasPrice}
        estimatedTime={ProposeGasEstimate}
      />
      <GasView
        title="High"
        gasPrice={FastGasPrice}
        estimatedTime={FastGasEstimate}
      />
    </HStack>
  );
};
