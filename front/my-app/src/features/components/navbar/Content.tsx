import { useState } from "react";
import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box";

export const Content = () => {
  const [visible, setVisible] = useState(false);

  const handleLogoClick = () => {
    setVisible(!visible);
  }

  return (
    <>
      {visible && (
        <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
          <Spacer y={1} />
          <Text size="$lg">
            home page 
          </Text>
        </Box>
      )}
    </>
  );
}
