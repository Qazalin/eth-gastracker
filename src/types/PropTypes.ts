import React from "react";
export type LayoutPropType = {
  children?: React.ReactNode;
};

export type GasViewPropType = {
  title: "Low" | "Average" | "High";
  gasPrice: string;
  estimatedTime: string;
};

/* For displaying the gas information in the UI
 * we need two things: the gas price and its corresponding estimated time
 */
type GasUIResultTypes = "price" | "estimate";

/* Gas types based on etherscan's res */
type gasType = "Safe" | "Propose" | "Fast";

/* Final UI props for GasInfoLayout */
export type GasInfoLayoutProps = Record<
  `${gasType}Gas${Capitalize<GasUIResultTypes>}`,
  string
>;
