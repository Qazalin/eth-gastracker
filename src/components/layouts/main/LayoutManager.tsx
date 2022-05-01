import { useAdaptivityContext } from "@etherTrack/lib/hooks/useAdaptivityContext";
import { MainLayoutProps } from "@etherTrack/types";
import React, { useEffect } from "react";
import { MobileLayout } from "./MobileLayout";
import { DesktopLayout } from "./DesktopLayout";

/**
 * Top-level component that decides on which layout
 * to show based on window dimensions
 */
export const LayoutManager: React.FC<MainLayoutProps> = ({
  gasPrice,
  barChart,
  stats,
}) => {
  const isMobile = useAdaptivityContext();

  useEffect(() => console.log(isMobile), [isMobile]);

  if (isMobile)
    return (
      <MobileLayout gasPrice={gasPrice} barChart={barChart} stats={stats} />
    );
  else
    return (
      <DesktopLayout gasPrice={gasPrice} barChart={barChart} stats={stats} />
    );
};
