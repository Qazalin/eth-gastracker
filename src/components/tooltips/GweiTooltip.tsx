import { Tooltip } from "@chakra-ui/react";

/** A tooltip for users not fammiliar with the Gwei unit
 * You can control the visibility of the tooltip based on the component
 */
export const GweiTooltip = ({ children, isVisibile, bg }) => {
  return (
    <Tooltip
      bg={bg}
      color="text1"
      label="Gwei is a unit of Ether used for transaction fees"
      borderRadius="10px"
      visibility={isVisibile ? "visible" : "hidden"}
    >
      {children}
    </Tooltip>
  );
};
