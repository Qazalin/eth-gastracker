import React from "react";
export type LayoutPropType = {
  children?: React.ReactNode;
};

export type GasViewPropType = {
  title: "Low" | "Average" | "High";
  gasPrice: string;
  estimatedTime: string;
};
