import { Box, CircularProgress } from "@chakra-ui/react";
import { GasViewPropType } from "@etherTrack/types";
import React from "react";
import { secondsToMins } from "@etherTrack/lib";
import { Text } from "@chakra-ui/react";
import { useAdaptivityContext } from "@etherTrack/lib/hooks/useAdaptivityContext";

/**
 * An isolated component of the view for each gas price with their relative percentage differences
 * @param title The title: Low, High, Average
 * @param gasPrice the gas price in Gwei
 * @param estimatedTime the api response of the estimated time
 * @param percentageDiff The percentage difference of the value from the HIGH gas price
 */
export const GasView: React.FC<GasViewPropType> = ({
  title,
  gasPrice,
  estimatedTime,
  percentageDiff,
}) => {
  const isMobile = useAdaptivityContext();
  const colors: Record<"Low" | "Average" | "High", string> = {
    Low: "#FC759F",
    Average: "#9DABF2",
    High: "#A17AC9",
  };

  const color = colors[title];
  const value = percentageDiff == 0 ? 100 : 100 - percentageDiff;

  return (
    <Box
      w="100%"
      h="100%"
      display={isMobile ? "normal" : "flex"}
      textAlign="center"
    >
      <Box pos="relative">
        <Text variant="h1" fontFamily="body" fontWeight="normal">
          {title}
        </Text>
        <Box
          pos={isMobile ? "initial" : "absolute"}
          bottom={isMobile ? "none" : 0}
        >
          <Text minW="70px">{gasPrice} gwei</Text>
          <Text minW="80px" color="text2">
            {estimatedTime >= 60
              ? secondsToMins(estimatedTime) + " " + "mins"
              : estimatedTime + " " + "seconds"}
          </Text>
        </Box>
      </Box>
      <CircularProgress
        color={color}
        size="100%"
        w="100%"
        h={isMobile ? "80%" : "100%"}
        thickness="8px"
        trackColor="#494F56"
        value={value}
      />
    </Box>
  );
};
