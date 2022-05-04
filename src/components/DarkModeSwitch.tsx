import { SlideFade, useColorMode, Image } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Image
      position="fixed"
      top="1rem"
      right="1rem"
      mt="20px"
      w="80px"
      onClick={toggleColorMode}
      alt="mood"
      src={isDark ? "/moods/sun.svg" : "/moods/moon.svg"}
    />
  );
};
