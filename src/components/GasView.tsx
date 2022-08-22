import { Box, Grid, GridItem, CircularProgress } from "@chakra-ui/react";
import { GasViewPropType } from "@etherTrack/types";
import React from "react";
import { secondsToMins } from "@etherTrack/lib";
import { Text } from "@chakra-ui/react";
import Tooltip from "./tooltips/CutomTooltip";

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
  const colors: Record<"Low" | "Average" | "High", string> = {
    Low: "#FC759F",
    Average: "#9DABF2",
    High: "#A17AC9",
  };

  const color = colors[title]; // color for the illustration
  const value = percentageDiff == 0 ? 100 : 100 - percentageDiff; // calculate based on difference with 100%
  const formattedTime =
    estimatedTime >= 60
      ? secondsToMins(estimatedTime) + " " + "mins"
      : estimatedTime + " " + "seconds";

  return (
    <Grid
      templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
      w="100%"
      h="100%"
      textAlign="center"
    >
      <GridItem colSpan={2}>
        <Text variant="h2">{title}</Text>
        <Box w="100%" h="100%">
          <Tooltip
            content={"Gwei is a unit of ether used for transaction fees"}
            isVisibile={title === "Average" ? true : false}
            sx={{ bg: color }}
          >
            <Text minW="70px">{gasPrice} gwei</Text>
          </Tooltip>
          <Tooltip
            isVisibile={title === "High" ? true : false}
            sx={{ bg: color }}
            content={`It'll take about ${formattedTime} to confirm your transaction`}
          >
            <Text minW="80px" color="text2">
              {formattedTime}
            </Text>
          </Tooltip>
        </Box>
      </GridItem>
      <GridItem
        display="flex"
        justifyContent="center"
        alignItems="center"
        colSpan={2}
      >
        <CircularProgress
          color={color}
          size="100px"
          thickness="8px"
          trackColor="#494F56"
          value={value}
        />
      </GridItem>
    </Grid>
  );
};
