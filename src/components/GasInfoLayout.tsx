import { HStack } from "@chakra-ui/react";
import { GasView } from "@etherTrack/components";
import { GasInfoLayoutProps } from "@etherTrack/types";

export const GasInfoLayout: React.FC<{
  data: GasInfoLayoutProps | undefined;
}> = ({ data }) => {
  if (data) {
    return (
      <HStack spacing="10px" w="100%" h="50%">
        <GasView
          title="Low"
          gasPrice={data.SafeGasPrice}
          estimatedTime={data.SafeGasEstimate}
        />
        <GasView
          title="Average"
          gasPrice={data.ProposeGasPrice}
          estimatedTime={data.ProposeGasEstimate}
        />
        <GasView
          title="High"
          gasPrice={data.FastGasPrice}
          estimatedTime={data.FastGasEstimate}
        />
      </HStack>
    );
  } else {
    return <h1>sceleton layout🩻</h1>;
  }
};
