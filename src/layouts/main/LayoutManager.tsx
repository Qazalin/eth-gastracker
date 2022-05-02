import { useAdaptivityContext } from "@etherTrack/lib/hooks/useAdaptivityContext";
import { MainLayoutProps } from "@etherTrack/types";
import React from "react";
import { MobileLayout } from "./MobileLayout";
import { DesktopLayout } from "./DesktopLayout";

/**
 * Top-level component that decides on which layout and handles global loading states
 * to show based on window dimensions
 * @param gasPriceLayout
 * @param barChartLayoutmain
 * @param statsLayout
 */
export const LayoutManager: React.FC<MainLayoutProps> = (props) => {
  console.log(props.isLoading);
  const isMobile = useAdaptivityContext();
  if (props.isLoading) {
    return <h1>im loading</h1>;
  } else {
    if (isMobile) return <MobileLayout {...props} />;
    else return <DesktopLayout {...props} />;
  }
};
