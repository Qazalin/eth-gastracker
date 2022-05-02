import { useAdaptivityContext } from "@etherTrack/lib/hooks/useAdaptivityContext"
import { MainLayoutProps } from "@etherTrack/types"
import React, { useEffect } from "react"
import { MobileLayout } from "./MobileLayout"
import { DesktopLayout } from "./DesktopLayout"

/**
 * Top-level component that decides on which layout
 * to show based on window dimensions
 * @param gasPriceLayout
 * @param barChartLayoutmain
 * @param statsLayout
 */
export const LayoutManager: React.FC<MainLayoutProps> = (props) => {

  const isMobile = useAdaptivityContext()

  if (isMobile)
    return (
      <MobileLayout {...props} />
    )
  else
    return (
      <DesktopLayout {...props} />
    )
}
