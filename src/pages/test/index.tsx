import React from "react";
import { Box } from "@chakra-ui/react";

function Label() {
  const [backgroundColor, setBackgroundColor] = React.useState("red");
  const updateTimer = React.useRef(null);

  function setUpdate() {
    setBackgroundColor("#9b34ee");
    updateTimer.current = setTimeout(() => {
      setBackgroundColor("inherit");
      updateTimer.current = null;
      console.log("updated");
    }, 1000);
  }

  return <Box bg={backgroundColor}>hello world</Box>;
}

export default Label;
