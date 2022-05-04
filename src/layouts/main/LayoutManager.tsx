import { useAdaptivityContext } from "@etherTrack/lib/hooks/useAdaptivityContext"
import { MainLayoutProps } from "@etherTrack/types"
import React from "react"
import { MobileLayout } from "./MobileLayout"
import { DesktopLayout } from "./DesktopLayout"
import {
  MobileGhostLayout,
  DesktopGhostLayout,
} from "@etherTrack/layouts/ghost"

/**
 * Top-level component that decides on which layout and handles global loading states
 * to show based on window dimensions
 * @param gasPriceLayout
 * @param barChartLayoutmain
 * @param statsLayout
 */
export const LayoutManager: React.FC<MainLayoutProps> = (props) => {
  const isMobile = useAdaptivityContext()
  if (props.isLoading) {
    if (isMobile) return <MobileGhostLayout />
    else return <DesktopGhostLayout />
  } else {
    if (isMobile) return <MobileLayout {...props} />
    else return <DesktopLayout {...props} />
  }
}
