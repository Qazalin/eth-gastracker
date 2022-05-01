import React, { useMemo } from "react";
import { useWindowDimensions } from "@etherTrack/lib/hooks";
import { BREAKPOINTS } from "@etherTrack/ui";

type Props = {
  children?: React.ReactNode;
};

export const AdaptivityContext = React.createContext<boolean>(false);
const AdaptivityProvider: React.FC<Props> = ({ children }) => {
  const isMobile = useWindowDimensions(1200);
  const mobileContext = useMemo(() => isMobile, [isMobile]);
  if (mobileContext !== null) {
    return (
      <AdaptivityContext.Provider value={mobileContext}>
        {children}
      </AdaptivityContext.Provider>
    );
  }
  return null;
};

export default AdaptivityProvider;
