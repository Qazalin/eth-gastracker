import { useContext } from "react";
import { AdaptivityContext } from "@etherTrack/lib/providers";

export const useAdaptivityContext = () => useContext(AdaptivityContext);
