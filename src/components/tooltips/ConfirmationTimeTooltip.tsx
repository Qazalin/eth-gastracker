import Tooltip from "./CutomTooltip";

/** A tooltip for explaining the x seconds number in the GasPriceLayout
 */
export const ConfirmationTimeTooltip = ({ chilren, bg, isVisibile, time }) => {
  return (
    <Tooltip
      content={`It'll take about ${time} to 
confirm your transaction`}
      sx={{ bg: bg }}
    ></Tooltip>
  );
};
