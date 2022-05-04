import { Tooltip } from "@chakra-ui/react";
import { TooltipPropType } from "@etherTrack/types";

/** An extensible and themed tooltip with further props
 * @param isVisibile control the visibility
 * @param content The content inside the tooltip
 * @param sx further styling options
 */
const CustomTooltip: React.FC<TooltipPropType> = ({
  children,
  isVisibile,
  content,
  sx,
}) => {
  return (
    <Tooltip
      sx={sx}
      color="text1"
      label={content}
      borderRadius="10px"
      visibility={isVisibile ? "visible" : "hidden"}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
