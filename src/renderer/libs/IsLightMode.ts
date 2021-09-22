import { useColorMode } from "@chakra-ui/react";

export default function IsLightMode() {
  const { colorMode } = useColorMode();
  if (colorMode === "light") return true;
  return false;
}
