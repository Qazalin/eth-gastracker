import { Flex, HStack, Center, Text, Button } from "@chakra-ui/react";
import { GasView } from "@etherTrack/components";
import { EtherscanGasResultType } from "@etherTrack/types/ApiTypes";

export const GasPriceLayout: React.FC<{ data: EtherscanGasResultType }> = ({
  data,
}) => {
  return (
    <HStack spacing="10px" w="100%" h="50%">
      <GasView title="Low" gasPrice={data.SafeGasPrice} estimatedTime="2sec" />
      <GasView
        title="Average"
        gasPrice={data.ProposeGasPrice}
        estimatedTime="2sec"
      />
      <GasView title="Low" gasPrice={data.FastGasPrice} estimatedTime="2sec" />
    </HStack>
  );
};
