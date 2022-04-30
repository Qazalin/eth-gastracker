import { HStack, useToast } from "@chakra-ui/react";
import { GasView } from "@etherTrack/components";
import { GasViewGhost } from "@etherTrack/components/ghost";
import { GasInfoLayoutProps } from "@etherTrack/types";

export const GasInfoLayout: React.FC<{
  data: GasInfoLayoutProps | undefined;
  isError: boolean;
}> = ({ data, isError }) => {
  const toast = useToast();
  if (isError) {
    return <h1>sorry, there was an error</h1>;
  } else if (data) {
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
    return (
      <HStack spacing="10px" w="100%" h="50%">
        <GasViewGhost />
        <GasViewGhost />
        <GasViewGhost />
      </HStack>
    );
  }
};
