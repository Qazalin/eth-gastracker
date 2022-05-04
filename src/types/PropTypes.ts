import { CircularProgressProps, TooltipProps } from "@chakra-ui/react";
import React from "react";

export type LayoutPropType = {
  children?: React.ReactNode;
};

/**
 * The Three main layouts that collectively make up the entire app + the loading state
 */
export type MainLayoutProps = {
  gasPriceLayout: React.ReactElement;
  barChartLayout: React.ReactElement;
  statsLayout: React.ReactElement;
  isLoading?: boolean;
};

export type GasViewPropType = {
  title: "Low" | "Average" | "High";
  gasPrice: number;
  estimatedTime: number;
  percentageDiff: number;
};

/* For displaying the gas information in the UI
 * we need two things: the gas price and its corresponding estimated time
 */
type GasUIResultTypes = "price" | "estimate";

/* Gas types based on etherscan's res */
type gasType = "Safe" | "Propose" | "Fast";

export type GasDataProps = Record<
  `${gasType}Gas${Capitalize<GasUIResultTypes>}`,
  number
>;

/* Final UI props for all the three individual layouts */
export interface IsolatedLayoutProps extends GasDataProps {
  suggestBaseFee: number;
  gasUsedRatio: number[];
}

export type DonutChartProps = {
  value: number;
  deltaTime: number;
  sx: CircularProgressProps;
};

/**
 * [Low, Average, High]
 */
export type ConfirmationTimeChartProps = [number, number, number];

export type NetworkStatsLayoutProps = {
  suggestedBaseFeeGwei: number;
  suggestedBaseFeeUSD: number;
  gasUsedRatio: number[];
};

export type TooltipPropType = {
  children: React.ReactNode;
  content: string;
  isVisibile: boolean;
  sx: Omit<TooltipProps, "children">;
};
